
const productos = [
    {
        "id": 1,
        "producto_nombre": "Manzana",
        "descripcion": "Manzanas rojas frescas",
        "precio": 150,
        "imagen_url": "./imagenes/manzana.png",
        "tipo_producto": "Fruta",
        "stock": 10
    },
    {
        "id": 2,
        "producto_nombre": "Pan",
        "descripcion": "Pan integral de 500g",
        "precio": 120,
        "imagen_url": "./imagenes/pan.jpg",
        "tipo_producto": "Panadería",
        "stock": 5
    },
    {
        "id": 3,
        "producto_nombre": "Leche",
        "descripcion": "Leche entera de 1 litro",
        "precio": 90,
        "imagen_url": "./imagenes/leche.png",
        "tipo_producto": "Lácteos",
        "stock": 9
    },
    {
        "id": 4,
        "producto_nombre": "Arroz",
        "descripcion": "Arroz blanco de 1 kg",
        "precio": 100,
        "imagen_url": "./imagenes/arroz.jpg",
        "tipo_producto": "Cereales",
        "stock": 8
    },
    {
        "id": 5,
        "producto_nombre": "Pollo",
        "descripcion": "Pechuga de pollo 500g",
        "precio": 350,
        "imagen_url": "./imagenes/pollo.jpg",
        "tipo_producto": "Carnes",
        "stock": 3
    },
    {
        "id": 6,
        "producto_nombre": "Jugo de Naranja",
        "descripcion": "Jugo de naranja natural 1L",
        "precio": 200,
        "imagen_url": "./imagenes/jugo.jpg",
        "tipo_producto": "Bebidas",
        "stock": 6
    },
    {
        "id": 7,
        "producto_nombre": "Yogur",
        "descripcion": "Yogur natural 200g",
        "precio": 80,
        "imagen_url": "./imagenes/yogur.jpg",
        "tipo_producto": "Lácteos",
        "stock": 7
    },
    {
        "id": 8,
        "producto_nombre": "Queso",
        "descripcion": "Queso cheddar 250g",
        "precio": 250,
        "imagen_url": "./imagenes/queso.jpg",
        "tipo_producto": "Lácteos",
        "stock": 2
    },
    {
        "id": 9,
        "producto_nombre": "Huevos",
        "descripcion": "Docena de huevos frescos",
        "precio": 180,
        "imagen_url": "./imagenes/huevos.jpg",
        "tipo_producto": "Huevos",
        "stock": 11
    },
    {
        "id": 10,
        "producto_nombre": "Cereal",
        "descripcion": "Cereal de avena 500g",
        "precio": 230,
        "imagen_url": "./imagenes/cereal.jpg",
        "tipo_producto": "Cereales",
        "stock": 4
    },
    {
        "id": 11,
        "producto_nombre": "Tomate",
        "descripcion": "Tomates frescos",
        "precio": 160,
        "imagen_url": "./imagenes/tomate.jpg",
        "tipo_producto": "Verdura",
        "stock": 12
    },
    {
        "id": 12,
        "producto_nombre": "Pastas",
        "descripcion": "Pastas capeletinis",
        "precio": 150,
        "imagen_url": "./imagenes/pastas.jpg",
        "tipo_producto": "Cereales",
        "stock": 10
    },
    {
        "id": 13,
        "producto_nombre": "Zanahoria",
        "descripcion": "Zanahorias frescas 1kg",
        "precio": 140,
        "imagen_url": "./imagenes/zanahoria.jpg",
        "tipo_producto": "Verdura",
        "stock": 13
    },
    {
        "id": 14,
        "producto_nombre": "Aceite de Oliva",
        "descripcion": "Aceite de oliva virgen extra 500ml",
        "precio": 500,
        "imagen_url": "./imagenes/aceite.jpg",
        "tipo_producto": "Aceite",
        "stock": 14
    },
    {
        "id": 15,
        "producto_nombre": "Cafe",
        "descripcion": "Cafe molido 250g",
        "precio": 300,
        "imagen_url": "./imagenes/cafe.jpg",
        "tipo_producto": "Bebidas",
        "stock": 15
    },
    {
        "id": 16,
        "producto_nombre": "Azucar",
        "descripcion": "Azucar blanca 1kg",
        "precio": 100,
        "imagen_url": "./imagenes/azucar.jpg",
        "tipo_producto": "Condimentos",
        "stock": 16
    },
    {
        "id": 17,
        "producto_nombre": "Sal",
        "descripcion": "Sal de mesa 1kg",
        "precio": 70,
        "imagen_url": "./imagenes/sal.jpg",
        "tipo_producto": "Condimentos",
        "stock": 7
    },
    {
        "id": 18,
        "producto_nombre": "Atun",
        "descripcion": "Atun enlatado 200g",
        "precio": 150,
        "imagen_url": "./imagenes/atun.jpg",
        "tipo_producto": "Pescado",
        "stock": 8
    },
    {
        "id": 19,
        "producto_nombre": "Manteca",
        "descripcion": "Mantequilla sin sal 250g",
        "precio": 250,
        "imagen_url": "./imagenes/manteca.jpg",
        "tipo_producto": "Lácteos",
        "stock": 9
    },
    {
        "id": 20,
        "producto_nombre": "Helado",
        "descripcion": "Helado balde de 3 colores por kilo",
        "precio": 400,
        "imagen_url": "./imagenes/helado.jpg",
        "tipo_producto": "Postres",
        "stock": 10
    },
    {
        "id": 21,
        "producto_nombre": "Banana",
        "descripcion": "Bananas frescas",
        "precio": 120,
        "imagen_url": "./imagenes/banana.jpg",
        "tipo_producto": "Fruta",
        "stock": 11
    },
    {
        "id": 22,
        "producto_nombre": "Naranja",
        "descripcion": "Naranjas frescas",
        "precio": 110,
        "imagen_url": "./imagenes/naranja.jpg",
        "tipo_producto": "Fruta",
        "stock": 12
    },
    {
        "id": 23,
        "producto_nombre": "Pera",
        "descripcion": "Peras frescas",
        "precio": 130,
        "imagen_url": "./imagenes/pera.jpg",
        "tipo_producto": "Fruta",
        "stock": 13
    },
    {
        "id": 24,
        "producto_nombre": "Frutilla",
        "descripcion": "Frutillas frescas 500g",
        "precio": 180,
        "imagen_url": "./imagenes/frutilla.jpg",
        "tipo_producto": "Fruta",
        "stock": 14
    },
    {
        "id": 25,
        "producto_nombre": "Sandia",
        "descripcion": "Sandia fresca",
        "precio": 250,
        "imagen_url": "./imagenes/sandia.jpg",
        "tipo_producto": "Fruta",
        "stock": 15
    }
];
