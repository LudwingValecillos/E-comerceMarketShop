const productos = [
    {
        "id": 1,
        "producto": "Manzana",
        "descripcion": "Manzanas rojas frescas",
        "precio": 150,
        "imagen_url": "./imagenes/manzana.jpg",
        "tipo_producto": "Fruta",
        "stock": 10
    },
    {
        "id": 2,
        "producto": "Pan",
        "descripcion": "Pan integral de 500g",
        "precio": 120,
        "imagen_url": "./imagenes/pan.jpg",
        "tipo_producto": "Panadería",
        "stock": 5
    },
    {
        "id": 3,
        "producto": "Leche",
        "descripcion": "Leche entera de 1 litro",
        "precio": 90,
        "imagen_url": "./imagenes/leche.jpg",
        "tipo_producto": "Lácteos",
        "stock": 9
    },
    {
        "id": 4,
        "producto": "Arroz",
        "descripcion": "Arroz blanco de 1 kg",
        "precio": 100,
        "imagen_url": "./imagenes/arroz.jpg",
        "tipo_producto": "Cereales",
        "stock": 8
    },
    {
        "id": 5,
        "producto": "Pollo",
        "descripcion": "Pechuga de pollo 500g",
        "precio": 350,
        "imagen_url": "./imagenes/pollo.jpg",
        "tipo_producto": "Carnes",
        "stock": 3
    },
    {
        "id": 6,
        "producto": "Jugo de Naranja",
        "descripcion": "Jugo de naranja natural 1L",
        "precio": 200,
        "imagen_url": "./imagenes/jugo.jpg",
        "tipo_producto": "Bebidas",
        "stock": 6
    },
    {
        "id": 7,
        "producto": "Yogur",
        "descripcion": "Yogur natural 200g",
        "precio": 80,
        "imagen_url": "./imagenes/yogur.jpg",
        "tipo_producto": "Lácteos",
        "stock": 7
    },
    {
        "id": 8,
        "producto": "Queso",
        "descripcion": "Queso cheddar 250g",
        "precio": 250,
        "imagen_url": "./imagenes/queso.jpg",
        "tipo_producto": "Lácteos",
        "stock": 2
    },
    {
        "id": 9,
        "producto": "Huevos",
        "descripcion": "Docena de huevos frescos",
        "precio": 180,
        "imagen_url": "./imagenes/huevos.jpg",
        "tipo_producto": "Huevos",
        "stock": 11
    },
    {
        "id": 10,
        "producto": "Cereal",
        "descripcion": "Cereal de avena 500g",
        "precio": 230,
        "imagen_url": "./imagenes/cereal.jpg",
        "tipo_producto": "Cereales",
        "stock": 4
    },
    {
        "id": 11,
        "producto": "Tomate",
        "descripcion": "Tomates frescos",
        "precio": 160,
        "imagen_url": "./imagenes/tomate.jpg",
        "tipo_producto": "Verdura",
        "stock": 12
    },
    {
        "id": 12,
        "producto": "Pasta",
        "descripcion": "Pasta de trigo 500g",
        "precio": 150,
        "imagen_url": "./imagenes/pasta.jpg",
        "tipo_producto": "Cereales",
        "stock": 10
    },
    {
        "id": 13,
        "producto": "Zanahoria",
        "descripcion": "Zanahorias frescas 1kg",
        "precio": 140,
        "imagen_url": "./imagenes/zanahoria.jpg",
        "tipo_producto": "Verdura",
        "stock": 13
    },
    {
        "id": 14,
        "producto": "Aceite de Oliva",
        "descripcion": "Aceite de oliva virgen extra 500ml",
        "precio": 500,
        "imagen_url": "./imagenes/aceite.jpg",
        "tipo_producto": "Aceite",
        "stock": 14
    },
    {
        "id": 15,
        "producto": "Café",
        "descripcion": "Café molido 250g",
        "precio": 300,
        "imagen_url": "./imagenes/cafe.jpg",
        "tipo_producto": "Bebidas",
        "stock": 15
    },
    {
        "id": 16,
        "producto": "Azúcar",
        "descripcion": "Azúcar blanca 1kg",
        "precio": 100,
        "imagen_url": "./imagenes/azucar.jpg",
        "tipo_producto": "Condimentos",
        "stock": 16
    },
    {
        "id": 17,
        "producto": "Sal",
        "descripcion": "Sal de mesa 1kg",
        "precio": 70,
        "imagen_url": "./imagenes/sal.jpg",
        "tipo_producto": "Condimentos",
        "stock": 7
    },
    {
        "id": 18,
        "producto": "Atún",
        "descripcion": "Atún enlatado 200g",
        "precio": 150,
        "imagen_url": "./imagenes/atun.jpg",
        "tipo_producto": "Pescado",
        "stock": 8
    },
    {
        "id": 19,
        "producto": "Mantequilla",
        "descripcion": "Mantequilla sin sal 250g",
        "precio": 250,
        "imagen_url": "./imagenes/mantequilla.jpg",
        "tipo_producto": "Lácteos",
        "stock": 9
    },
    {
        "id": 20,
        "producto": "Helado",
        "descripcion": "Helado de vainilla 500ml",
        "precio": 400,
        "imagen_url": "./imagenes/helado.jpg",
        "tipo_producto": "Postres",
        "stock": 10
    },
    {
        "id": 21,
        "producto": "Banana",
        "descripcion": "Bananas frescas",
        "precio": 120,
        "imagen_url": "./imagenes/banana.jpg",
        "tipo_producto": "Fruta",
        "stock": 11
    },
    {
        "id": 22,
        "producto": "Naranja",
        "descripcion": "Naranjas frescas",
        "precio": 110,
        "imagen_url": "./imagenes/naranja.jpg",
        "tipo_producto": "Fruta",
        "stock": 12
    },
    {
        "id": 23,
        "producto": "Pera",
        "descripcion": "Peras frescas",
        "precio": 130,
        "imagen_url": "./imagenes/pera.jpg",
        "tipo_producto": "Fruta",
        "stock": 13
    },
    {
        "id": 24,
        "producto": "Frutilla",
        "descripcion": "Frutillas frescas 500g",
        "precio": 180,
        "imagen_url": "./imagenes/frutilla.jpg",
        "tipo_producto": "Fruta",
        "stock": 14
    },
    {
        "id": 25,
        "producto": "Sandía",
        "descripcion": "Sandía fresca",
        "precio": 250,
        "imagen_url": "./imagenes/sandia.jpg",
        "tipo_producto": "Fruta",
        "stock": 15
    }
];