
// Crear opciones del select
let selectProducto = document.querySelector(".select-producto");

function crearOpciones(productos) {
    let tiposProductos = [
        ...new Set(productos.flatMap((producto) => producto.tipo_producto)),//flatMap itera sobre cada objeto en el array productos y extraer el valor de la propiedad tipo_producto
        //Se crea un Set a partir del array resultante. Set es una colección de valores únicos, por lo que elimina cualquier duplicado.
        //[...new Set()] Se convierte el Set de nuevo en un array utilizando  spread operator
    ].sort();//Se ordena alfabéticamente el array de tipos de productos únicos.

    tiposProductos.forEach((tipo) => {
        let opcion = document.createElement("option");
        opcion.value = tipo;
        opcion.innerHTML = tipo;
        selectProducto.appendChild(opcion);
    });
}

crearOpciones(productos);

// Manejo del carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];// este   || se utiliza para proporcionar un valor por defecto en caso de que el valor a la izquierda sea falsy (en este caso, si es null o undefined)
//JSON.parse(localStorage.getItem("carrito")   getItem devuelve un string json y JSON.parse lo convierte en un objeto o array javaScript


// Función para guardar el contendio del carrito en el localStorage
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));//JSON.stringify convierte el array u objeto javaScript en un string JSON
}



// Función para calcular el precio total de todos los items del carrito, tambien usa el método reduce() para sumar los precios de cada item multiplicado por su cantidad.
function calcularTotal() {
    return carrito.reduce((total, item) => {//reduce ()  aplica una función a un acumulador y cada valor del array (de izquierda a derecha) para reducirlo a un solo valor.
        //reduce() toma una función de callback (total, item) => {...} y un valor inicial 0.
//total ===> es el acumulador que guarda la suma de los precios de los items .
//item  ===> es el elemento actual del array carrito que se está procesando.

        const producto = productos.find(p => p.id === item.id);// lo que hace find es  buscar un producto en el array productos cuyo id coincida con el id del item en el carrito.
        return total + (producto ? producto.precio * item.cantidad : 0); //Esta expresión agrega al acumulador total el precio del item multiplicado por su cantidad.

        //Si producto no es undefined (es decir, se encontró el producto correspondiente), multiplica el precio del producto (producto.precio) por la cantidad de ese item en el carrito (item.cantidad).
        //Si producto es undefined, agrega 0 al total (para manejar casos en los que el producto ya no exista en el array productos).
    }, 0);
}



// Función para cargar los productos del carrito en el modal
function cargarProductosCarrito() {
    const contenedorCarrito = document.getElementById('cartItemsContainer');
    contenedorCarrito.innerHTML = '';

    if (carrito.length === 0) {
        // Si el carrito está vacío, mostrar un mensaje indicando que el carrito está vacío.
        contenedorCarrito.innerHTML = '<p class="text-center">El carrito está vacío.</p>';

        //Actualizar el total del carrito a $0.
        document.getElementById('cartTotal').innerText = 'Total: $0';
        return;
    }

    const fragmento = document.createDocumentFragment();
//Iterar sobre cada elemento del carrito
    carrito.forEach(item => {
        const producto = productos.find(p => p.id === item.id); // Encontrar el producto correspondiente en la lista de productos usando el ID.

        //Si se encuentra el producto, crear un elemento HTML para mostrarlo.
        if (producto) {
            const elementoItem = document.createElement('div');
            elementoItem.className = 'flex justify-between items-center p-2 border-b';
            elementoItem.innerHTML = `
                <div>
                    <p class="font-semibold">${producto.producto_nombre}</p>
                    <p class="text-gray-600">${producto.descripcion}</p>
                    <p class="text-gray-600">Cantidad: ${item.cantidad}</p>
                </div>
                <div>
                    <p class="font-semibold">$${producto.precio * item.cantidad}</p>
                    <button class="eliminar-item  bg-red-500 text-white px-2 py-1 rounded" data-id="${producto.id}">Eliminar</button>
                </div>
            `;
            fragmento.appendChild(elementoItem);
        }
    });

    contenedorCarrito.appendChild(fragmento);
    document.getElementById('cartTotal').innerText = `Total: $${calcularTotal()}`;
}

// Crear el modal dinámicamente
function crearModalCarrito() {
    const modalHTML = `
        <div id="cartModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center overflow-scroll hidden">
            <div class="bg-white rounded-lg overflow-hidden w-11/12 md:w-1/2 ">
                <div class="px-6 py-4 flex justify-between items-center border-b">
                    <h3 class="text-lg font-bold">Carrito de Compras</h3>
                    <button id="cerrarModalButton" class="text-gray-600 hover:text-gray-900">&times;</button>
                </div>
                <div class="px-6" id="cartItemsContainer">
                    <!-- Los productos del carrito se mostrarán aquí -->
                </div>
                <div class="px-6 py-4 border-t flex justify-between items-center">
                    <p id="cartTotal" class="font-semibold">Total: $0</p>
                    <button id="checkoutButton" class="bg-green-500 text-white px-4 py-2 rounded">Checkout</button>
                </div>
            </div>
        </div>`;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    document.getElementById('cerrarModalButton').addEventListener('click', () => {
        document.getElementById('cartModal').classList.add('hidden');
    });

    document.getElementById('checkoutButton').addEventListener('click', () => {
        alert('Checkout');
    });
}
crearModalCarrito();

// Crear cartas de productos
let contenedorTarjetas = document.querySelector(".card-container");

function crearTarjeta(producto) {
    const unidadesRestantes = producto.stock - (carrito.find(item => item.id === producto.id)?.cantidad || 0);
    const pocasUnidades = unidadesRestantes <= 5;
    return `
        <article class="w-72 h-full shadow-xl flex flex-col justify-between bg-red-200 rounded-lg p-5 ">
        <a href="./detalles.html?id=${producto.id}">
            <img src="${producto.imagen_url}" class="imagenArticulo w-full h-40 object-contain rounded-lg" alt="${producto.producto_nombre}">
            <h2 class="tituloArticulo text-center font-bold text-2xl">${producto.producto_nombre}</h2>
            <p class="descripcionArticulo text-center ">${producto.descripcion}</p>
            <div class="flex justify-evenly">
                <p class="precioArticulo font-bold text-center">${producto.precio} $</p>
                <p class="stockArticulo font-bold text-center ${pocasUnidades ? 'text-red-500' : ''}">
                    ${unidadesRestantes} Unidades
                    ${pocasUnidades ? '<span class="text-red-500 font-bold">restantes</span>' : ''}
                </p>
            </div>

            </a>
            <div class="flex justify-center items-center"> 
            <button data-id="${producto.id}" class="agregar-carrito w-full p-2 transition-all duration-150 active:w-[85%] active:bg-[#991B1B]  ${carrito.find(item => item.id === producto.id) ? 'bg-red-800 text-white' : 'bg-gray-400 text-white'} text-white rounded-lg mt-3">Agregar al carrito</button>
</div>
        </article>`;
}

function agregarTarjetas(productos) {
    contenedorTarjetas.innerHTML = productos.map(crearTarjeta).join('');
}

agregarTarjetas(productos);

// Aplicar filtros y actualizar tarjetas
let buscadorProducto = document.getElementById("input-buscador-nombre");

const aplicarFiltros = () => {
    const tipoSeleccionado = selectProducto.value;
    const busqueda = buscadorProducto.value.toLowerCase();

    const productosFiltrados = productos.filter((producto) => {
        const coincideTipo = tipoSeleccionado === "all" || producto.tipo_producto.includes(tipoSeleccionado);
        const coincideBusqueda = producto.producto_nombre.toLowerCase().includes(busqueda);
        return coincideTipo && coincideBusqueda;
    });

    if (productosFiltrados.length === 0) {
        contenedorTarjetas.innerHTML = '<h2 class="text-5xl font-bold mb-4">Producto no encontrado</h2>';
    } else {
        agregarTarjetas(productosFiltrados);
    }
};

selectProducto.addEventListener("change", aplicarFiltros);
buscadorProducto.addEventListener("input", aplicarFiltros);

let agregarCantidadProductosEnCarrito = [];
let contador = 0
let carritoImagen = document.querySelector(".boton-carrito")
console.log(contador);
// Manejar el clic en el contenedor de tarjetas
contenedorTarjetas.addEventListener("click", (e) => {
    if (e.target.classList.contains('agregar-carrito')) {
        const id = e.target.dataset.id;
        const producto = productos.find(item => item.id == id);

        if (producto) {            
            const itemEnCarrito = carrito.find(item => item.id == id);
            if (itemEnCarrito) {
                if (itemEnCarrito.cantidad < producto.stock) {
                    itemEnCarrito.cantidad += 1;
                } else {
                    alert('No hay suficientes unidades en stock.');
                    return;
                }
            } else {
                carrito.push({ ...producto, cantidad: 1 });
            }
            guardarCarrito();
            agregarTarjetas(productos);
        }
    }
});

// Carrito de compras
document.addEventListener('DOMContentLoaded', () => {
    const abrirModalButton = document.getElementById('openModalButton');
    const modalCarrito = document.getElementById('cartModal');

    abrirModalButton.addEventListener('click', () => {
        modalCarrito.classList.remove('hidden');
        cargarProductosCarrito();
    });

    document.getElementById('cartItemsContainer').addEventListener('click', (e) => {
        if (e.target.classList.contains('eliminar-item')) {
            const id = e.target.dataset.id;
            const itemEnCarrito = carrito.find(item => item.id == id);

            if (itemEnCarrito) {
                if (itemEnCarrito.cantidad > 1) {
                    itemEnCarrito.cantidad -= 1;
                } else {
                    carrito = carrito.filter(item => item.id != id);
                }
                guardarCarrito();
                cargarProductosCarrito();
                agregarTarjetas(productos);
            }
        }
    });
  });
