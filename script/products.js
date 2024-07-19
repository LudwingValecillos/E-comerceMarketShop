// Código para crear opciones del select
let select = document.querySelector(".select-producto");

function createOptions(productos) {
  let tiposProductos = [
    ...new Set(productos.flatMap((products) => products.tipo_producto)),
  ].sort();
  console.log(tiposProductos);

  tiposProductos.forEach((products) => {
    console.log(products);
    let option = document.createElement("option");
    option.value = products;
    option.innerHTML = products;
    select.appendChild(option);
  });
}

createOptions(productos);

// Código para manejar el carrito
let carro;

try {
    const carritoStr = localStorage.getItem("carrito");
    console.log("Valor de carritoStr:", carritoStr);

    carro = JSON.parse(carritoStr) || [];
} catch (e) {
    console.error("Error al analizar el JSON:", e);
    carro = [];
}

console.log("Valor de carro:", carro);

// Código para crear cartas de productos
let cardContainer = document.querySelector(".card-container");

function createCards(arrayProductos) {
  let card = `
    <article class="w-72 h-full border-black border-2 flex flex-col justify-between bg-red-200 rounded-lg p-5">
      <img src="${arrayProductos.imagen_url}" class="imagenArticulo w-full h-40 objet-contain rounded-lg" alt="${arrayProductos.producto_nombre}">
      <h2 class="tituloArticulo text-center font-bold text-2xl">${arrayProductos.producto_nombre}</h2>
      <p class="descripcionArticulo text-center ">${arrayProductos.descripcion}</p>
      <div class="flex justify-evenly">
        <p class="precioArticulo font-bold text-center">${arrayProductos.precio} $</p>
        <p class="stockArticulo font-bold text-center">${arrayProductos.stock} unidades</p>
      </div>
      <button data-vote="true" data-id="${arrayProductos.id}" class="w-full p-2 ${carro.includes(arrayProductos.id) ? 'bg-red-800 text-white' : 'bg-gray-400 text-white'} text-white rounded-lg mt-3">Agregar al carrito</button>
    </article>`;
  return card;
}

function addCards(productos) {
  cardContainer.innerHTML = "";
  let respuesta = "";
  productos.forEach((item) => {
    respuesta += createCards(item);
  });
  cardContainer.innerHTML += respuesta;
}

addCards(productos);

// Código para aplicar filtros y actualizar tarjetas
let buscadorProducto = document.getElementById("input-buscador-nombre");

const aplicarFiltros = () => {
  const fruta = select.value;
  const buscador = buscadorProducto.value.toLowerCase();

  const productosFiltrados = productos.filter((producto) => {
    const matchesGenre = fruta === "all" || producto.tipo_producto.includes(fruta);
    const matchesSearchTerm = producto.producto_nombre.toLowerCase().includes(buscador);
    return matchesGenre && matchesSearchTerm;
  });
  
  if(productosFiltrados.length === 0){
    cardContainer.innerHTML = '<h2 class="text-5xl font-bold mb-4">Producto no encontrado</h2>';
  } else {
    addCards(productosFiltrados);
  }
};

select.addEventListener("change", aplicarFiltros);
buscadorProducto.addEventListener("input", aplicarFiltros);

// Código para manejar el clic en el contenedor de tarjetas
cardContainer.addEventListener("click", (e) => {
  let esBotonLike = e.target.dataset.vote; 
  let idFruta = e.target.dataset.id; 

  if(esBotonLike){
    if(carro.includes(idFruta)){
      carro = carro.filter(item => item != idFruta);
    } else {
      carro.push(idFruta);
    }
  }
  
  console.log(carro);
  localStorage.setItem("carrito", JSON.stringify(carro));
});
