const productos=[
    {
        "id": 1,
        "producto": "Manzana",
        "descripcion": "Manzanas rojas frescas",
        "precio": 150,
        "imagen_url": "https://example.com/images/manzana.jpg",
        "tipo_producto": "Fruta"
    },
    {
        "id": 2,
        "producto": "Pan",
        "descripcion": "Pan integral de 500g",
        "precio": 120,
        "imagen_url": "https://example.com/images/pan.jpg",
        "tipo_producto": "Panadería"
    },
    {
        "id": 3,
        "producto": "Leche",
        "descripcion": "Leche entera de 1 litro",
        "precio": 90,
        "imagen_url": "https://example.com/images/leche.jpg",
        "tipo_producto": "Lácteos"
    },
    {
        "id": 4,
        "producto": "Arroz",
        "descripcion": "Arroz blanco de 1 kg",
        "precio": 100,
        "imagen_url": "https://example.com/images/arroz.jpg",
        "tipo_producto": "Cereales"
    },
    {
        "id": 5,
        "producto": "Pollo",
        "descripcion": "Pechuga de pollo 500g",
        "precio": 350,
        "imagen_url": "https://example.com/images/pollo.jpg",
        "tipo_producto": "Carnes"
    },
    {
        "id": 6,
        "producto": "Jugo de Naranja",
        "descripcion": "Jugo de naranja natural 1L",
        "precio": 200,
        "imagen_url": "https://example.com/images/jugo.jpg",
        "tipo_producto": "Bebidas"
    },
    {
        "id": 7,
        "producto": "Yogur",
        "descripcion": "Yogur natural 200g",
        "precio": 80,
        "imagen_url": "https://example.com/images/yogur.jpg",
        "tipo_producto": "Lácteos"
    },
    {
        "id": 8,
        "producto": "Queso",
        "descripcion": "Queso cheddar 250g",
        "precio": 250,
        "imagen_url": "https://example.com/images/queso.jpg",
        "tipo_producto": "Lácteos"
    },
    {
        "id": 9,
        "producto": "Huevos",
        "descripcion": "Docena de huevos frescos",
        "precio": 180,
        "imagen_url": "https://example.com/images/huevos.jpg",
        "tipo_producto": "Huevos"
    },
    {
        "id": 10,
        "producto": "Cereal",
        "descripcion": "Cereal de avena 500g",
        "precio": 230,
        "imagen_url": "https://example.com/images/cereal.jpg",
        "tipo_producto": "Cereales"
    },
    {
        "id": 11,
        "producto": "Tomate",
        "descripcion": "Tomates frescos",
        "precio": 160,
        "imagen_url": "https://example.com/images/tomate.jpg",
        "tipo_producto": "Verdura"
    },
    {
        "id": 12,
        "producto": "Pasta",
        "descripcion": "Pasta de trigo 500g",
        "precio": 150,
        "imagen_url": "https://example.com/images/pasta.jpg",
        "tipo_producto": "Cereales"
    },
    {
        "id": 13,
        "producto": "Zanahoria",
        "descripcion": "Zanahorias frescas 1kg",
        "precio": 140,
        "imagen_url": "https://example.com/images/zanahoria.jpg",
        "tipo_producto": "Verdura"
    },
    {
        "id": 14,
        "producto": "Aceite de Oliva",
        "descripcion": "Aceite de oliva virgen extra 500ml",
        "precio": 500,
        "imagen_url": "https://example.com/images/aceite.jpg",
        "tipo_producto": "Aceite"
    },
    {
        "id": 15,
        "producto": "Café",
        "descripcion": "Café molido 250g",
        "precio": 300,
        "imagen_url": "https://example.com/images/cafe.jpg",
        "tipo_producto": "Bebidas"
    },
    {
        "id": 16,
        "producto": "Azúcar",
        "descripcion": "Azúcar blanca 1kg",
        "precio": 100,
        "imagen_url": "https://example.com/images/azucar.jpg",
        "tipo_producto": "Condimentos"
    },
    {
        "id": 17,
        "producto": "Sal",
        "descripcion": "Sal de mesa 1kg",
        "precio": 70,
        "imagen_url": "https://example.com/images/sal.jpg",
        "tipo_producto": "Condimentos"
    },
    {
        "id": 18,
        "producto": "Atún",
        "descripcion": "Atún enlatado 200g",
        "precio": 150,
        "imagen_url": "https://example.com/images/atun.jpg",
        "tipo_producto": "Pescado"
    },
    {
        "id": 19,
        "producto": "Mantequilla",
        "descripcion": "Mantequilla sin sal 250g",
        "precio": 250,
        "imagen_url": "https://example.com/images/mantequilla.jpg",
        "tipo_producto": "Lácteos"
    },
    {
        "id": 20,
        "producto": "Helado",
        "descripcion": "Helado de vainilla 500ml",
        "precio": 400,
        "imagen_url": "https://example.com/images/helado.jpg",
        "tipo_producto": "Postres"
    },
    {
        "id": 21,
        "producto": "Banana",
        "descripcion": "Bananas frescas",
        "precio": 120,
        "imagen_url": "https://example.com/images/banana.jpg",
        "tipo_producto": "Fruta"
    },
    {
        "id": 22,
        "producto": "Naranja",
        "descripcion": "Naranjas frescas",
        "precio": 110,
        "imagen_url": "https://example.com/images/naranja.jpg",
        "tipo_producto": "Fruta"
    },
    {
        "id": 23,
        "producto": "Pera",
        "descripcion": "Peras frescas",
        "precio": 130,
        "imagen_url": "https://example.com/images/pera.jpg",
        "tipo_producto": "Fruta"
    },
    {
        "id": 24,
        "producto": "Frutilla",
        "descripcion": "Frutillas frescas 500g",
        "precio": 180,
        "imagen_url": "https://example.com/images/frutilla.jpg",
        "tipo_producto": "Fruta"
    },
    {
        "id": 25,
        "producto": "Sandía",
        "descripcion": "Sandía fresca",
        "precio": 250,
        "imagen_url": "https://example.com/images/sandia.jpg",
        "tipo_producto": "Fruta"
    }
]
