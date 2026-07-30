/**
 * ==========================================================
 * Proyecto    : FullPie
 * Archivo     : pies.js
 * Autor       : Diana Salomé Luna Gavilanes
 * Fecha       : Julio 2026
 * Descripción :
 * Contiene el catálogo de pies disponibles en la aplicación.
 * Cada objeto representa un producto con su información
 * necesaria para mostrarlo en el menú.
 * ==========================================================
 */

const pies = [

  {
    id: 1,
    nombre: 'Pie de Uva',
    precio: '$18.99',
    imagen: require('../assets/images/img_pie_uva.jpeg'),
    ingredientes: [
      'Harina',
      'Mantequilla',
      'Uvas frescas',
      'Azúcar'
    ],
    descripcion:
      'Pie artesanal preparado con una masa crujiente y un delicioso relleno de uvas frescas de sabor intenso.',
  },

  {
    id: 2,
    nombre: 'Pie de Manzana',
    precio: '$17.99',
    imagen: require('../assets/images/img_pie_manzana.jpeg'),
    ingredientes: [
      'Harina',
      'Mantequilla',
      'Manzana',
      'Canela'
    ],
    descripcion:
      'Clásico pie de manzana con un suave toque de canela y una masa dorada recién horneada.',
  },

  {
    id: 3,
    nombre: 'Pie de Cereza',
    precio: '$18.49',
    imagen: require('../assets/images/img_pie_cereza.jpeg'),
    ingredientes: [
      'Harina',
      'Mantequilla',
      'Cerezas',
      'Azúcar'
    ],
    descripcion:
      'Exquisito pie con cerezas seleccionadas que ofrecen un equilibrio perfecto entre dulzura y acidez.',
  },

  {
    id: 4,
    nombre: 'Pie de Limón',
    precio: '$16.99',
    imagen: require('../assets/images/img_pie_limon.jpeg'),
    ingredientes: [
      'Harina',
      'Mantequilla',
      'Limón',
      'Leche condensada'
    ],
    descripcion:
      'Refrescante pie de limón con crema suave y un delicado equilibrio entre sabores dulces y cítricos.',
  },

  {
    id: 5,
    nombre: 'Pie de Fresa',
    precio: '$17.49',
    imagen: require('../assets/images/img_pie_fresa.jpeg'),
    ingredientes: [
      'Harina',
      'Mantequilla',
      'Fresas',
      'Crema'
    ],
    descripcion:
      'Pie artesanal con fresas frescas y una suave crema que realza el sabor natural de la fruta.',
  },

  {
    id: 6,
    nombre: 'Pie de Higo',
    precio: '$19.99',
    imagen: require('../assets/images/img_pie_higo.jpeg'),
    ingredientes: [
      'Harina',
      'Mantequilla',
      'Higos',
      'Miel'
    ],
    descripcion:
      'Una receta gourmet elaborada con higos maduros y un ligero toque de miel que aporta un sabor único.',
  },

  {
    id: 7,
    nombre: 'Pie de Caramelo Salado',
    precio: '$20.99',
    imagen: require('../assets/images/img_pie_caramelo_salado.jpeg'),
    ingredientes: [
      'Harina',
      'Mantequilla',
      'Caramelo',
      'Sal marina'
    ],
    descripcion:
      'Delicioso pie de caramelo salado con una combinación perfecta entre dulzura y un ligero toque salado.',
  },

];

export default pies;