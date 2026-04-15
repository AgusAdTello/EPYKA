import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

const URL_BASE = 'https://tiendalacabeauty.com.ar/productos/';
const DIR_DESTINO = './src/data';
const ARCHIVO_DESTINO = path.join(DIR_DESTINO, 'productos.json');

async function extraerTodoElCatalogo() {
  try {
    console.log('Iniciando extracción masiva en ALTA CALIDAD...');
    
    if (!fs.existsSync(DIR_DESTINO)) {
      fs.mkdirSync(DIR_DESTINO, { recursive: true });
    }

    let productos = [];
    let paginaActual = 1;
    let hayMasProductos = true;
    let nombrePrimerProductoAnterior = ""; 

    while (hayMasProductos) {
      console.log(`⏳ Escaneando página ${paginaActual}...`);
      const urlPagina = `${URL_BASE}?page=${paginaActual}`;
      
      try {
        const { data } = await axios.get(urlPagina);
        const $ = cheerio.load(data);
        const productosEnPagina = $('.js-item-product');
        
        if (productosEnPagina.length === 0) {
          break;
        }

        const primerProductoActual = $(productosEnPagina[0]).find('.js-item-name').text().trim();
        if (primerProductoActual === nombrePrimerProductoAnterior) {
          break; // Evita el bucle infinito de Tiendanube
        }
        nombrePrimerProductoAnterior = primerProductoActual;

        productosEnPagina.each((index, element) => {
          let nombre = $(element).find('.js-item-name').text().trim();
          const tituloCompleto = $(element).find('.js-item-name').attr('title');
          if (tituloCompleto) nombre = tituloCompleto;

          // --- EL ARREGLO DE ALTA CALIDAD ---
          let imagen = $(element).find('.js-item-image').attr('data-srcset') || 
                       $(element).find('.js-item-image').attr('src');
                       
          if (imagen) {
            if (imagen.includes('w,')) {
              // Separa todas las resoluciones disponibles
              const resoluciones = imagen.split(',').map(r => r.trim());
              // Agarra la ÚLTIMA (que es siempre la más grande, ej: 1024px)
              const mejorResolucion = resoluciones[resoluciones.length - 1];
              imagen = mejorResolucion.split(' ')[0];
            } else {
              imagen = imagen.split(' ')[0];
            }

            if (imagen.startsWith('//')) {
              imagen = 'https:' + imagen;
            }
          }
          // ----------------------------------

          const productoYaExiste = productos.some(p => p.nombre === nombre);

          if (nombre && !productoYaExiste) {
            productos.push({
              id: `laca-${productos.length + 1}`,
              nombre: nombre,
              marca: "LACA",
              categoria: "laca",
              descripcion: "Producto oficial Laboratorio LACA.",
              imagen: imagen || "https://via.placeholder.com/300?text=LACA"
            });
          }
        });

        paginaActual++;

      } catch (errorAxios) {
        if (errorAxios.response && errorAxios.response.status === 404) {
           hayMasProductos = false;
        } else {
           throw errorAxios;
        }
      }
    }

    fs.writeFileSync(ARCHIVO_DESTINO, JSON.stringify(productos, null, 2));
    console.log(`\x1b[32m%s\x1b[0m`, `¡Éxito! Se actualizaron ${productos.length} productos en HD.`);

  } catch (error) {
    console.error('Error fatal al hacer scraping:', error.message);
  }
}

extraerTodoElCatalogo();