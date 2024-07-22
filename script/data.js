const productos = [
    {
        "id": 1,
        "producto_nombre": "Manzana",
        "descripcion": "Manzanas rojas frescas",
        "precio": 2299,
        "imagen_url": "../imagenes/manzana.png",
        "tipo_producto": "Fruta",
        "stock": 10,
        "detalles": "Las manzanas rojas frescas son perfectas para una merienda saludable. Son ricas en fibra, vitamina C y varios antioxidantes. Se pueden disfrutar crudas, en ensaladas, o como parte de postres y platos salados."
    },
    {
        "id": 2,
        "producto_nombre": "Pan",
        "descripcion": "Bolsas de pan casero por kg",
        "precio": 1500,
        "imagen_url": "../imagenes/pan.jpg",
        "tipo_producto": "Panadería",
        "stock": 5,
        "detalles": "El pan casero se elabora con ingredientes naturales y es ideal para acompañar comidas o preparar deliciosos sándwiches. Su sabor y textura destacan por ser más auténticos y frescos que los panes industriales."
    },
    {
        "id": 3,
        "producto_nombre": "Leche",
        "descripcion": "Leche entera de 1 litro",
        "precio": 1300,
        "imagen_url": "../imagenes/leche.png",
        "tipo_producto": "Lácteos",
        "stock": 9,
        "detalles": "La leche entera de 1 litro es una excelente fuente de calcio, proteínas y vitaminas. Perfecta para consumir sola, con cereales, en batidos o como ingrediente en una gran variedad de recetas."
    },
    {
        "id": 4,
        "producto_nombre": "Arroz",
        "descripcion": "Arroz blanco de 1 kg",
        "precio": 2300,
        "imagen_url": "../imagenes/arroz.jpg",
        "tipo_producto": "Cereales",
        "stock": 8,
        "detalles": "El arroz blanco es un alimento básico en muchas cocinas alrededor del mundo. Este arroz de alta calidad se cocina de manera uniforme, resultando en un acompañamiento ideal para una variedad de platos principales."
    },
    {
        "id": 5,
        "producto_nombre": "Pollo",
        "descripcion": "Pollo entero",
        "precio": 2800,
        "imagen_url": "../imagenes/pollo.JPG",
        "tipo_producto": "Carnes",
        "stock": 3,
        "detalles": "El pollo entero es una opción versátil y económica para preparar una comida completa. Se puede asar, cocinar a la parrilla o usar en guisos y sopas. Rico en proteínas y bajo en grasas."
    },
    {
        "id": 6,
        "producto_nombre": "Jugo de Naranja",
        "descripcion": "Jugo de naranja natural 1L",
        "precio": 1690,
        "imagen_url": "../imagenes/jugo.JPG",
        "tipo_producto": "Bebidas",
        "stock": 6,
        "detalles": "El jugo de naranja natural es refrescante y lleno de vitamina C. Perfecto para el desayuno o como bebida en cualquier momento del día. Hecho con naranjas frescas para un sabor auténtico."
    },
    {
        "id": 7,
        "producto_nombre": "Yogur",
        "descripcion": "Yogur por litro",
        "precio": 1750,
        "imagen_url": "../imagenes/yogur.jpg",
        "tipo_producto": "Lácteos",
        "stock": 7,
        "detalles": "El yogur por litro es una fuente rica en probióticos, calcio y proteínas. Ideal para consumir solo, con frutas, cereales o como ingrediente en batidos y postres."
    },
    {
        "id": 8,
        "producto_nombre": "Queso",
        "descripcion": "Queso cremoso 250g",
        "precio": 3100,
        "imagen_url": "../imagenes/queso.JPG",
        "tipo_producto": "Lácteos",
        "stock": 2,
        "detalles": "El queso cremoso de 250g es perfecto para untar en pan, galletas o como parte de una tabla de quesos. Su textura suave y sabor delicado lo hacen un favorito en muchas recetas."
    },
    {
        "id": 9,
        "producto_nombre": "Huevos",
        "descripcion": "Docena de huevos frescos",
        "precio": 2400,
        "imagen_url": "../imagenes/huevos.jpg",
        "tipo_producto": "Huevos",
        "stock": 11,
        "detalles": "Los huevos frescos son un alimento versátil y nutritivo. Ricos en proteínas, vitaminas y minerales, son esenciales para una dieta equilibrada. Perfectos para cocinar de muchas maneras."
    },
    {
        "id": 10,
        "producto_nombre": "Cereal",
        "descripcion": "Cereal copos de maíz y arroz crocante 350g",
        "precio": 2350,
        "imagen_url": "../imagenes/cereal.JPG",
        "tipo_producto": "Cereales",
        "stock": 4,
        "detalles": "El cereal de copos de maíz y arroz crocante es ideal para el desayuno. Rico en fibra y bajo en grasas, se puede disfrutar con leche, yogur o como un snack saludable."
    },
    {
        "id": 11,
        "producto_nombre": "Tomate",
        "descripcion": "Tomates frescos 1kg",
        "precio": 800,
        "imagen_url": "../imagenes/tomate.jpg",
        "tipo_producto": "Verdura",
        "stock": 12,
        "detalles": "Los tomates frescos son una excelente fuente de vitaminas A y C, así como de antioxidantes. Perfectos para ensaladas, salsas, guisos y más, los tomates añaden color y sabor a cualquier plato."
    },
    {
        "id": 12,
        "producto_nombre": "Pastas",
        "descripcion": "Pastas Giacomo capelletini 1kg",
        "precio": 3900,
        "imagen_url": "../imagenes/pastas.JPG",
        "tipo_producto": "Cereales",
        "stock": 10,
        "detalles": "Las pastas Giacomo capelletini son una opción deliciosa y versátil para cualquier comida. Hechas con ingredientes de alta calidad, estas pastas se cocinan de manera uniforme y mantienen su textura y sabor."
    },
    {
        "id": 13,
        "producto_nombre": "Zanahoria",
        "descripcion": "Zanahorias frescas 1kg",
        "precio": 1200,
        "imagen_url": "../imagenes/zanahoria.jpg",
        "tipo_producto": "Verdura",
        "stock": 13,
        "detalles": "Las zanahorias frescas son ricas en beta-caroteno, fibra, vitamina K1 y potasio. Son perfectas para consumir crudas como snack, en ensaladas, o cocidas en sopas y guisos."
    },
    {
        "id": 14,
        "producto_nombre": "Aceite de Oliva",
        "descripcion": "Aceite de oliva virgen extra 500ml",
        "precio": 5500,
        "imagen_url": "../imagenes/aceite.jpg",
        "tipo_producto": "Aceite",
        "stock": 14,
        "detalles": "El aceite de oliva virgen extra es conocido por sus beneficios para la salud y su sabor superior. Perfecto para aderezos, cocinar a la parrilla, y como complemento para pan y ensaladas."
    },
    {
        "id": 15,
        "producto_nombre": "Cafe",
        "descripcion": "Café torrado equilibrado 1 kg",
        "precio": 4500,
        "imagen_url": "../imagenes/cafe.jpg",
        "tipo_producto": "Bebidas",
        "stock": 15,
        "detalles": "El café torrado equilibrado es perfecto para los amantes del café que buscan un sabor robusto y balanceado. Ideal para disfrutar en las mañanas o en cualquier momento del día."
    },
    {
        "id": 16,
        "producto_nombre": "Azúcar",
        "descripcion": "Azúcar blanca 1kg",
        "precio": 1700,
        "imagen_url": "../imagenes/azucar.jpg",
        "tipo_producto": "Condimentos",
        "stock": 16,
        "detalles": "El azúcar blanca es un ingrediente básico en cualquier cocina. Perfecta para endulzar bebidas, postres y muchas recetas. Su textura fina la hace ideal para una variedad de usos."
    },
    {
        "id": 17,
        "producto_nombre": "Sal",
        "descripcion": "Sal de mesa 500 gr",
        "precio": 1200,
        "imagen_url": "../imagenes/sal.jpg",
        "tipo_producto": "Condimentos",
        "stock": 7,
        "detalles": "La sal de mesa es esencial para dar sabor a cualquier comida. Este producto de alta calidad se disuelve fácilmente y es ideal para cocinar y sazonar en la mesa."
    },
    {
        "id": 18,
        "producto_nombre": "Atún",
        "descripcion": "Atún enlatado 200g",
        "precio": 2300,
        "imagen_url": "../imagenes/atun.jpg",
        "tipo_producto": "Pescado",
        "stock": 8,
        "detalles": "El atún enlatado es una fuente rica en proteínas y ácidos grasos omega-3. Perfecto para ensaladas, sándwiches y una variedad de recetas rápidas y nutritivas."
    },
    {
        "id": 19,
        "producto_nombre": "Manteca",
        "descripcion": "Mantequilla sin sal 250g",
        "precio": 3100,
        "imagen_url": "../imagenes/manteca.jpg",
        "tipo_producto": "Lácteos",
        "stock": 9,
        "detalles": "La mantequilla sin sal de 250g es ideal para cocinar y hornear. Su sabor suave y cremoso la hace perfecta para untar en pan, usar en salsas y mejorar cualquier receta."
    },
    {
        "id": 20,
        "producto_nombre": "Helado",
        "descripcion": "Helado balde de 3 colores por kilo",
        "precio": 6400,
        "imagen_url": "../imagenes/helado.jpg",
        "tipo_producto": "Postres",
        "stock": 10,
        "detalles": "El helado de 3 colores es un delicioso postre que combina los sabores favoritos de todos. Perfecto para cualquier ocasión, este helado cremoso es un deleite para toda la familia."
    },
    {
        "id": 21,
        "producto_nombre": "Banana",
        "descripcion": "Bananas frescas 1kg (se vende envasada)",
        "precio": 2000,
        "imagen_url": "../imagenes/banana.jpg",
        "tipo_producto": "Fruta",
        "stock": 11,
        "detalles": "Las bananas frescas son una fuente rica en potasio y vitaminas. Perfectas para consumir solas, en batidos, o como parte de recetas de postres y desayunos saludables."
    },
    {
        "id": 22,
        "producto_nombre": "Naranja",
        "descripcion": "Naranjas frescas 1/2kg (se vende envasada)",
        "precio": 1700,
        "imagen_url": "../imagenes/naranja.jpg",
        "tipo_producto": "Fruta",
        "stock": 12,
        "detalles": "Las naranjas frescas son conocidas por su alto contenido de vitamina C y antioxidantes. Ideales para consumir solas, en jugos, o como parte de ensaladas y postres."
    },
    {
        "id": 23,
        "producto_nombre": "Pera",
        "descripcion": "Peras frescas 1/2kg (se vende envasada)",
        "precio": 1800,
        "imagen_url": "../imagenes/pera.png",
        "tipo_producto": "Fruta",
        "stock": 13,
        "detalles": "Las peras frescas son jugosas y ricas en fibra. Son perfectas para comer solas, en ensaladas, o cocidas en postres. Su sabor dulce y textura suave las hacen muy versátiles."
    },
    {
        "id": 24,
        "producto_nombre": "Frutilla",
        "descripcion": "Frutillas frescas 300g (se vende envasada)",
        "precio": 5100,
        "imagen_url": "../imagenes/frutillas.png",
        "tipo_producto": "Fruta",
        "stock": 14,
        "detalles": "Las frutillas frescas son ricas en antioxidantes, vitamina C y fibra. Perfectas para consumir frescas, en ensaladas de frutas, batidos, o como parte de postres y pasteles."
    },
    {
        "id": 25,
        "producto_nombre": "Sandía",
        "descripcion": "Sandía fresca",
        "precio": 1050,
        "imagen_url": "../imagenes/sandia.jpg",
        "tipo_producto": "Fruta",
        "stock": 15,
        "detalles": "La sandía fresca es refrescante y perfecta para los días calurosos. Rica en agua y antioxidantes, es ideal para comer sola, en ensaladas de frutas, o como parte de bebidas y postres."
    }
];
