function formatearAPesos(precio) {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS'
    }).format(precio);
}


const productos = [
    {
        "id": 1,
        "producto_nombre": "Manzana",
        "descripcion": "Manzanas rojas frescas",
        "precio": formatearAPesos(2299),
        "imagen_url": "../imagenes/manzana.png",
        "tipo_producto": "Fruta",
        "stock": 10,
        "detalles": "Las manzanas rojas frescas son perfectas para una merienda saludable. Son ricas en fibra, vitamina C y varios antioxidantes. Se pueden disfrutar crudas, en ensaladas, o como parte de postres y platos salados."
    },
    {
        "id": 2,
        "producto_nombre": "Pan",
        "descripcion": "Bolsas de pan casero por kg",
        "precio": formatearAPesos(1500),
        "imagen_url": "../imagenes/pan.jpg",
        "tipo_producto": "Panadería",
        "stock": 5,
        "detalles": "El pan casero se elabora con ingredientes naturales y es ideal para acompañar comidas o preparar deliciosos sándwiches. Su sabor y textura destacan por ser más auténticos y frescos que los panes industriales."
    },
    {
        "id": 3,
        "producto_nombre": "Leche",
        "descripcion": "Leche entera de 1 litro",
        "precio": formatearAPesos(1300),
        "imagen_url": "../imagenes/leche.png",
        "tipo_producto": "Lácteos",
        "stock": 9,
        "detalles": "La leche entera de 1 litro es una excelente fuente de calcio, proteínas y vitaminas. Perfecta para consumir sola, con cereales, en batidos o como ingrediente en una gran variedad de recetas."
    },
    {
        "id": 4,
        "producto_nombre": "Arroz",
        "descripcion": "Arroz blanco de 1 kg",
        "precio": formatearAPesos(2300),
        "imagen_url": "../imagenes/arroz.jpg",
        "tipo_producto": "Cereales",
        "stock": 8,
        "detalles": "El arroz blanco es un alimento básico en muchas cocinas alrededor del mundo. Este arroz de alta calidad se cocina de manera uniforme, resultando en un acompañamiento ideal para una variedad de platos principales."
    },
    {
        "id": 5,
        "producto_nombre": "Pollo",
        "descripcion": "Pollo entero",
        "precio": formatearAPesos(2800),
        "imagen_url": "../imagenes/pollo.JPG",
        "tipo_producto": "Carnes",
        "stock": 3,
        "detalles": "El pollo entero es una opción versátil y económica para preparar una comida completa. Se puede asar, cocinar a la parrilla o usar en guisos y sopas. Rico en proteínas y bajo en grasas."
    },
    {
        "id": 6,
        "producto_nombre": "Jugo de Naranja",
        "descripcion": "Jugo de naranja natural 1L",
        "precio": formatearAPesos(1690),
        "imagen_url": "../imagenes/jugo.JPG",
        "tipo_producto": "Bebidas",
        "stock": 6,
        "detalles": "El jugo de naranja natural es refrescante y lleno de vitamina C. Perfecto para el desayuno o como bebida en cualquier momento del día. Hecho con naranjas frescas para un sabor auténtico."
    },
    {
        "id": 7,
        "producto_nombre": "Yogur",
        "descripcion": "Yogur por litro",
        "precio": formatearAPesos(1750),
        "imagen_url": "../imagenes/yogur.jpg",
        "tipo_producto": "Lácteos",
        "stock": 7,
        "detalles": "El yogur por litro es una fuente rica en probióticos, calcio y proteínas. Ideal para consumir solo, con frutas, cereales o como ingrediente en batidos y postres."
    },
    {
        "id": 8,
        "producto_nombre": "Queso",
        "descripcion": "Queso cremoso 250g",
        "precio": formatearAPesos(3100),
        "imagen_url": "../imagenes/queso.JPG",
        "tipo_producto": "Lácteos",
        "stock": 2,
        "detalles": "El queso cremoso de 250g es perfecto para untar en pan, galletas o como parte de una tabla de quesos. Su textura suave y sabor delicado lo hacen un favorito en muchas recetas."
    },
    {
        "id": 9,
        "producto_nombre": "Huevos",
        "descripcion": "Docena de huevos frescos",
        "precio": formatearAPesos(2400),
        "imagen_url": "../imagenes/huevos.jpg",
        "tipo_producto": "Huevos",
        "stock": 11,
        "detalles": "Los huevos frescos son un alimento versátil y nutritivo. Ricos en proteínas, vitaminas y minerales, son esenciales para una dieta equilibrada. Perfectos para cocinar de muchas maneras."
    },
    {
        "id": 10,
        "producto_nombre": "Cereal",
        "descripcion": "Cereal copos de maíz y arroz crocante 350g",
        "precio": formatearAPesos(2350),
        "imagen_url": "../imagenes/cereal.JPG",
        "tipo_producto": "Cereales",
        "stock": 4,
        "detalles": "El cereal de copos de maíz y arroz crocante es ideal para el desayuno. Rico en fibra y bajo en grasas, se puede disfrutar con leche, yogur o como un snack saludable."
    },
    {
        "id": 11,
        "producto_nombre": "Tomate",
        "descripcion": "Tomates frescos 1kg",
        "precio": formatearAPesos(800),
        "imagen_url": "../imagenes/tomate.jpg",
        "tipo_producto": "Verdura",
        "stock": 12,
        "detalles": "Los tomates frescos son una excelente fuente de vitaminas A y C, así como de antioxidantes. Perfectos para ensaladas, salsas, guisos y más, los tomates añaden color y sabor a cualquier plato."
    },
    {
        "id": 12,
        "producto_nombre": "Pastas",
        "descripcion": "Pastas Giacomo capelletini 1kg",
        "precio": formatearAPesos(3900),
        "imagen_url": "../imagenes/pastas.JPG",
        "tipo_producto": "Cereales",
        "stock": 10,
        "detalles": "Las pastas Giacomo capelletini son una opción deliciosa y versátil para cualquier comida. Hechas con ingredientes de alta calidad, estas pastas se cocinan de manera uniforme y mantienen su textura y sabor."
    },
    {
        "id": 13,
        "producto_nombre": "Zanahoria",
        "descripcion": "Zanahorias frescas 1kg",
        "precio": formatearAPesos(1200),
        "imagen_url": "../imagenes/zanahoria.jpg",
        "tipo_producto": "Verdura",
        "stock": 13,
        "detalles": "Las zanahorias frescas son ricas en beta-caroteno, fibra, vitamina K1 y potasio. Son perfectas para consumir crudas como snack, en ensaladas, o cocidas en sopas y guisos."
    },
    {
        "id": 14,
        "producto_nombre": "Aceite de Oliva",
        "descripcion": "Aceite de oliva virgen extra 500ml",
        "precio": formatearAPesos(5500),
        "imagen_url": "../imagenes/aceite.jpg",
        "tipo_producto": "Aceite",
        "stock": 14,
        "detalles": "El aceite de oliva virgen extra es conocido por sus beneficios para la salud y su sabor superior. Perfecto para aderezos, cocinar a la parrilla, y como complemento para pan y ensaladas."
    },
    {
        "id": 15,
        "producto_nombre": "Cafe",
        "descripcion": "Café torrado equilibrado 1 kg",
        "precio": formatearAPesos(4500),
        "imagen_url": "../imagenes/cafe.jpg",
        "tipo_producto": "Bebidas",
        "stock": 15,
        "detalles": "El café torrado equilibrado es perfecto para los amantes del café que buscan un sabor robusto y balanceado. Ideal para disfrutar en las mañanas o en cualquier momento del día."
    },
    {
        "id": 16,
        "producto_nombre": "Lentejas",
        "descripcion": "Lentejas por 500g",
        "precio": formatearAPesos(1800),
        "imagen_url": "../imagenes/lentejas.jpg",
        "tipo_producto": "Legumbres",
        "stock": 16,
        "detalles": "Las lentejas son una excelente fuente de proteínas vegetales, fibra y varios nutrientes esenciales. Son ideales para sopas, guisos y ensaladas, ofreciendo una alternativa nutritiva y versátil."
    }
];
