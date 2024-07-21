const productos = [
    {
        "id": 1,
        "producto_nombre": "Manzana",
        "descripcion": "Manzanas rojas frescas",
        "precio": 2299,
        "imagen_url": "../imagenes/manzana.png",
        "tipo_producto": "Fruta",
        "stock": 10
    },
    {
        "id": 2,
        "producto_nombre": "Pan",
        "descripcion": "Bolsas de pan casero por kg",
        "precio": 1500,
        "imagen_url": "../imagenes/pan.jpg",
        "tipo_producto": "Panadería",
        "stock": 5 
    },
    {
        "id": 3,
        "producto_nombre": "Leche",
        "descripcion": "Leche entera de 1 litro",
        "precio": 1300,
        "imagen_url": "../imagenes/leche.png",
        "tipo_producto": "Lácteos",
        "stock": 9
    },
    {
        "id": 4,
        "producto_nombre": "Arroz",
        "descripcion": "Arroz blanco de 1 kg",
        "precio": 2300,
        "imagen_url": "../imagenes/arroz.jpg",
        "tipo_producto": "Cereales",
        "stock": 8
    },
    {
        "id": 5,
        "producto_nombre": "Pollo",
        "descripcion": "Pollo entero",
        "precio": 2800,
        "imagen_url": "../imagenes/pollo.JPG",
        "tipo_producto": "Carnes",
        "stock": 3
    },
    {
        "id": 6,
        "producto_nombre": "Jugo de Naranja",
        "descripcion": "Jugo de naranja natural 1L",
        "precio": 1690,
        "imagen_url": "../imagenes/jugo.jpg",
        "tipo_producto": "Bebidas",
        "stock": 6
    },
    {
        "id": 7,
        "producto_nombre": "Yogur",
        "descripcion": "Yogur por litro",
        "precio": 1750,
        "imagen_url": "../imagenes/yogur.jpg",
        "tipo_producto": "Lácteos",
        "stock": 7
    },
    {
        "id": 8,
        "producto_nombre": "Queso",
        "descripcion": "Queso cremoso 250g",
        "precio": 3100,
        "imagen_url": "../imagenes/queso.jpg",
        "tipo_producto": "Lácteos",
        "stock": 2
    },
    {
        "id": 9,
        "producto_nombre": "Huevos",
        "descripcion": "Docena de huevos frescos",
        "precio": 2400,
        "imagen_url": "../imagenes/huevos.jpg",
        "tipo_producto": "Huevos",
        "stock": 11
    },
    {
        "id": 10,
        "producto_nombre": "Cereal",
        "descripcion": "Cereal copos de maiz y arroz crocante 350g",
        "precio": 2350,
        "imagen_url": "../imagenes/cereal.jpg",
        "tipo_producto": "Cereales",
        "stock": 4
    },
    {
        "id": 11,
        "producto_nombre": "Tomate",
        "descripcion": "Tomates frescos 1kg",
        "precio": 800,
        "imagen_url": "../imagenes/tomate.jpg",
        "tipo_producto": "Verdura",
        "stock": 12
    },
    {
        "id": 12,
        "producto_nombre": "Pastas",
        "descripcion": "Pastas Giacomo capelletini 1kg",
        "precio": 3900,
        "imagen_url": "../imagenes/pastas.jpg",
        "tipo_producto": "Cereales",
        "stock": 10
    },
    {
        "id": 13,
        "producto_nombre": "Zanahoria",
        "descripcion": "Zanahorias frescas 1kg",
        "precio": 1200,
        "imagen_url": "../imagenes/zanahoria.jpg",
        "tipo_producto": "Verdura",
        "stock": 13
    },
    {
        "id": 14,
        "producto_nombre": "Aceite de Oliva",
        "descripcion": "Aceite de oliva virgen extra 500ml",
        "precio": 5500,
        "imagen_url": "../imagenes/aceite.jpg",
        "tipo_producto": "Aceite",
        "stock": 14
    },
    {
        "id": 15,
        "producto_nombre": "Cafe",
        "descripcion": "Cafe torrado equilibrado 1 kg",
        "precio": 4500,
        "imagen_url": "../imagenes/cafe.jpg",
        "tipo_producto": "Bebidas",
        "stock": 15
    },
    {
        "id": 16,
        "producto_nombre": "Azucar",
        "descripcion": "Azucar blanca 1kg",
        "precio": 1700,
        "imagen_url": "../imagenes/azucar.jpg",
        "tipo_producto": "Condimentos",
        "stock": 16
    },
    {
        "id": 17,
        "producto_nombre": "Sal",
        "descripcion": "Sal de mesa 500 gr",
        "precio": 1200,
        "imagen_url": "../imagenes/sal.jpg",
        "tipo_producto": "Condimentos",
        "stock": 7
    },
    {
        "id": 18,
        "producto_nombre": "Atun",
        "descripcion": "Atun enlatado 200g",
        "precio": 2300,
        "imagen_url": "../imagenes/atun.jpg",
        "tipo_producto": "Pescado",
        "stock": 8
    },
    {
        "id": 19,
        "producto_nombre": "Manteca",
        "descripcion": "Mantequilla sin sal 250g",
        "precio": 3100,
        "imagen_url": "../imagenes/manteca.jpg",
        "tipo_producto": "Lácteos",
        "stock": 9
    },
    {
        "id": 20,
        "producto_nombre": "Helado",
        "descripcion": "Helado balde de 3 colores por kilo",
        "precio": 6400,
        "imagen_url": "../imagenes/helado.jpg",
        "tipo_producto": "Postres",
        "stock": 10
    },
    {
        "id": 21,
        "producto_nombre": "Banana",
        "descripcion": "Bananas frescas 1kg (se vende enbasada)",
        "precio": 2000,
        "imagen_url": "../imagenes/banana.jpg",
        "tipo_producto": "Fruta",
        "stock": 11
    },
    {
        "id": 22,
        "producto_nombre": "Naranja",
        "descripcion": "Naranjas frescas 1/2kg (se vende enbasada)",
        "precio": 1700,
        "imagen_url": "../imagenes/naranja.jpg",
        "tipo_producto": "Fruta",
        "stock": 12
    },
    {
        "id": 23,
        "producto_nombre": "Pera",
        "descripcion": "Peras frescas 1/2kg (se vende enbasada) ",
        "precio": 1800,
        "imagen_url": "../imagenes/pera.png",

        

        "tipo_producto": "Fruta",
        "stock": 13
    },
    {
        "id": 24,
        "producto_nombre": "Frutilla",
        "descripcion": "Frutillas frescas 300g (se vende enbasada)",
        "precio": 5100,

        "imagen_url": "../imagenes/frutillas.png",

    
        "tipo_producto": "Fruta",
        "stock": 14
    },
    {
        "id": 25,
        "producto_nombre": "Sandia",
        "descripcion": "Sandia fresca ",
        "precio": 1050,
        "imagen_url": "../imagenes/sandia.jpg",
        "tipo_producto": "Fruta",
        "stock": 15
    }
];
