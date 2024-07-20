// // Código para crear opciones del select
// let select = document.querySelector(".select-producto");

// function createOptions(productos) {
//   let tiposProductos = [
//     ...new Set(productos.flatMap((products) => products.tipo_producto)),
//   ].sort();
//   console.log(tiposProductos);

//   tiposProductos.forEach((products) => {
//     console.log(products);
//     let option = document.createElement("option");
//     option.value = products;
//     option.innerHTML = products;
//     select.appendChild(option);
//   });
// }

// createOptions(productos);

// // Código para manejar el carrito
// let carro;

// try {
//     const carritoStr = localStorage.getItem("carrito");
//     console.log("Valor de carritoStr:", carritoStr);

//     carro = JSON.parse(carritoStr) || [];
// } catch (e) {
//     console.error("Error al analizar el JSON:", e);
//     carro = [];
// }

// console.log("Valor de carro:", carro);

// // Código para crear cartas de productos
// let cardContainer = document.querySelector(".card-container");

// function createCards(arrayProductos) {
//   let card = `
//     <article class="w-72 h-full border-black border-2 flex flex-col justify-between bg-red-200 rounded-lg p-5">
//       <img src="${arrayProductos.imagen_url}" class="imagenArticulo w-full h-40 objet-contain rounded-lg" alt="${arrayProductos.producto_nombre}">
//       <h2 class="tituloArticulo text-center font-bold text-2xl">${arrayProductos.producto_nombre}</h2>
//       <p class="descripcionArticulo text-center ">${arrayProductos.descripcion}</p>
//       <div class="flex justify-evenly">
//         <p class="precioArticulo font-bold text-center">${arrayProductos.precio} $</p>
//         <p class="stockArticulo font-bold text-center">${arrayProductos.stock} unidades</p>
//       </div>
//       <button data-vote="true" data-id="${arrayProductos.id}" class="w-full p-2 ${carro.includes(arrayProductos.id) ? 'bg-red-800 text-white' : 'bg-gray-400 text-white'} text-white rounded-lg mt-3">Agregar al carrito</button>
//     </article>`;
//   return card;
// }

// function addCards(productos) {
//   cardContainer.innerHTML = "";
//   let respuesta = "";
//   productos.forEach((item) => {
//     respuesta += createCards(item);
//   });
//   cardContainer.innerHTML += respuesta;
// }

// addCards(productos);

// // Código para aplicar filtros y actualizar tarjetas
// let buscadorProducto = document.getElementById("input-buscador-nombre");

// const aplicarFiltros = () => {
//   const fruta = select.value;
//   const buscador = buscadorProducto.value.toLowerCase();

//   const productosFiltrados = productos.filter((producto) => {
//     const matchesGenre = fruta === "all" || producto.tipo_producto.includes(fruta);
//     const matchesSearchTerm = producto.producto_nombre.toLowerCase().includes(buscador);
//     return matchesGenre && matchesSearchTerm;
//   });
  
//   if(productosFiltrados.length === 0){
//     cardContainer.innerHTML = '<h2 class="text-5xl font-bold mb-4">Producto no encontrado</h2>';
//   } else {
//     addCards(productosFiltrados);
//   }
// };

// select.addEventListener("change", aplicarFiltros);
// buscadorProducto.addEventListener("input", aplicarFiltros);


// //esta funcion cambia el color de fondo del carrito de gris a rojo y la frase.
// const toggleButtonColor = (button, isInCarro) => {
//     if (isInCarro) {
//       button.classList.remove('bg-gray-400');
//       button.classList.add('bg-red-800');
//       button.textContent = 'Agregado';
//     } else {
//       button.classList.remove('bg-red-800');
//       button.classList.add('bg-gray-400');
//       button.textContent = 'Agregar al carrito';
//     }
//   };








// // Código para manejar el clic en el contenedor de tarjetas
// // cardContainer.addEventListener("click", (e) => {
// //   let esBotonLike = e.target.dataset.vote; 
// //   let idFruta = e.target.dataset.id; 

// //   if(esBotonLike){
// //     if(carro.includes(idFruta)){
// //       carro = carro.filter(item => item != idFruta);
// //     } else {
// //       carro.push(idFruta);
// //     }
// //   }
  
// //   console.log(carro);
// //   localStorage.setItem("carrito", JSON.stringify(carro));
// // });





// // Recuperar el carrito del localStorage o inicializarlo si no existe( funcion arreglada esta es la que va no la que esta comentada)

// cardContainer.addEventListener("click", (e) => {
//   let esBotonLike = e.target.dataset.vote; 
//   let idFruta = e.target.dataset.id; 

//   if (esBotonLike) {
//     // Verificar si el idFruta ya está en el carro
//     if (carro.includes(idFruta)) {
//       // Eliminar el idFruta del carro
//       carro = carro.filter(item => item != idFruta);
//     } else {
//       // Agregar el idFruta al carro
//       carro.push(idFruta);
//     }
    
//     // Actualizar el localStorage con el nuevo estado del carro
//     localStorage.setItem("carrito", JSON.stringify(carro));
    

//     toggleButtonColor(e.target, carro.includes(idFruta));



//     // Mostrar el estado actualizado del carro en la consola
//     console.log(carro);
//   }
// });



// let imagenCarrito = document.getElementById("imagen-carrito");
// let contenedorCarrito = document.querySelector(".container-carrito");
// let main = document.querySelector(".main");
// console.log(contenedorCarrito);
// imagenCarrito.addEventListener("click",callBackCarrito)

// function callBackCarrito(evento) {
//     contenedorCarrito.style.display = "block";
//     contenedorCarrito.innerHTML = carritoEstructura(carro.map(id => productos.find(producto => producto.id === id)));
  
//     // Agregar manejador de eventos para los botones de eliminar productos
//     contenedorCarrito.querySelectorAll('.eliminar-producto').forEach(button => {
//       button.addEventListener('click', handleRemoveProduct);
//     });
//   }



//   function handleRemoveProduct(event) {
//     const idProducto = event.target.dataset.id;
    
//     // Eliminar el producto del carrito
//     carro = carro.filter(id => id !== idProducto);
    
//     // Actualizar el localStorage
//     localStorage.setItem("carrito", JSON.stringify(carro));
    
//     // Volver a renderizar el carrito
//     callBackCarrito();
//   }

// //function para crear la esctructura del carrito.
// // Función para crear la estructura del carrito
// function carritoEstructura(productosEnCarrito) {
//     let carrito = `
//       <h1 class="text-4xl">Carrito</h1>
//       <div class="productos-carrito">
//     `;
  
//     // Verificar que productosEnCarrito no esté vacío
//     if (productosEnCarrito.length === 0) {
//       carrito += '<p class="text-center">El carrito está vacío.</p>';
//     } else {
//       // Generar HTML para cada producto en el carrito
//       productosEnCarrito.forEach(producto => {
//         // Asegurarse de que el producto esté definido
//         if (producto) {
//           carrito += `
//             <div class="producto-carrito flex justify-between items-center p-2 border-b border-gray-200">
//               <img src="${producto.imagen_url}" class="w-20 h-20 object-cover rounded-lg" alt="${producto.producto_nombre}">
//               <div class="detalles-producto flex-1 ml-4">
//                 <h2 class="text-xl font-bold">${producto.producto_nombre}</h2>
//                 <p class="text-gray-600">${producto.descripcion}</p>
//                 <p class="text-gray-800 font-bold">${producto.precio} $</p>
//               </div>
//               <button data-id="${producto.id}" class="eliminar-producto bg-red-500 text-white px-3 py-1 rounded-lg">Eliminar</button>
//             </div>
//           `;
//         } else {
//           console.warn('Producto no encontrado para ID:');
//         }
//       });
//     }
  
//     // Cerrar el div de productos y añadir botón de finalizar compra
//     carrito += `
//       </div>
//       <button class="finalizar-compra bg-green-500 text-white px-5 py-2 rounded-lg mt-4">Finalizar Compra</button>
//     `;
  
//     return carrito;
//   }
































// // Código para crear opciones del select
// let select = document.querySelector(".select-producto");

// function createOptions(productos) {
//   let tiposProductos = [
//     ...new Set(productos.flatMap((products) => products.tipo_producto)),
//   ].sort();

//   tiposProductos.forEach((products) => {
//     let option = document.createElement("option");
//     option.value = products;
//     option.innerHTML = products;
//     select.appendChild(option);
//   });
// }

// createOptions(productos);

// // Código para manejar el carrito
// let carro;

// try {
//     const carritoStr = localStorage.getItem("carrito");
//     carro = JSON.parse(carritoStr) || [];
// } catch (e) {
//     console.error("Error al analizar el JSON:", e);
//     carro = [];
// }

// // Código para crear cartas de productos
// let cardContainer = document.querySelector(".card-container");

// function createCards(arrayProductos) {
//   let card = `
//     <article class="w-72 h-full border-black border-2 flex flex-col justify-between bg-red-200 rounded-lg p-5">
//       <img src="${arrayProductos.imagen_url}" class="imagenArticulo w-full h-40 object-contain rounded-lg" alt="${arrayProductos.producto_nombre}">
//       <h2 class="tituloArticulo text-center font-bold text-2xl">${arrayProductos.producto_nombre}</h2>
//       <p class="descripcionArticulo text-center">${arrayProductos.descripcion}</p>
//       <div class="flex justify-evenly">
//         <p class="precioArticulo font-bold text-center">${arrayProductos.precio} $</p>
//         <p class="stockArticulo font-bold text-center">${arrayProductos.stock <= 5 ? `ultimas ` + arrayProductos.stock + ` unidades ` : arrayProductos.stock + ` unidades` } </p>
//       </div>
//       <button  data-name=" ${arrayProductos.producto_nombre}"  data-id="${arrayProductos.id}" class="w-full p-2 ${carro.includes(arrayProductos.id) ? 'bg-red-800 text-white' : 'bg-gray-400 text-white'} text-white rounded-lg mt-3">
//         ${carro.includes(arrayProductos.id) ? 'Agregado' : 'Agregar al carrito'}
//       </button>
//     </article>`;
//   return card;
// }

// function addCards(productos) {
//   cardContainer.innerHTML = "";
//   let respuesta = "";
//   productos.forEach((item) => {
//     respuesta += createCards(item);
//   });
//   cardContainer.innerHTML += respuesta;
// }

// addCards(productos);

// // Código para aplicar filtros y actualizar tarjetas
// let buscadorProducto = document.getElementById("input-buscador-nombre");

// const aplicarFiltros = () => {
//   const fruta = select.value;
//   const buscador = buscadorProducto.value.toLowerCase();

//   const productosFiltrados = productos.filter((producto) => {
//     const matchesGenre = fruta === "all" || producto.tipo_producto.includes(fruta);
//     const matchesSearchTerm = producto.producto_nombre.toLowerCase().includes(buscador);
//     return matchesGenre && matchesSearchTerm;
//   });
  
//   if (productosFiltrados.length === 0) {
//     cardContainer.innerHTML = '<h2 class="text-5xl font-bold mb-4">Producto no encontrado</h2>';
//   } else {
//     addCards(productosFiltrados);
//   }
// };

// select.addEventListener("change", aplicarFiltros);
// buscadorProducto.addEventListener("input", aplicarFiltros);

// // Función para cambiar el color y el texto del botón
// const toggleButtonColor = (button, isInCarro) => {
//     if (isInCarro) {
//       button.classList.remove('bg-gray-400');
//       button.classList.add('bg-red-800');
//       button.textContent = 'Agregado';
//     } else {
//       button.classList.remove('bg-red-800');
//       button.classList.add('bg-gray-400');
//       button.textContent = 'Agregar al carrito';
//     }
// };

// // Código para manejar el clic en el contenedor de tarjetas
// cardContainer.addEventListener("click", (e) => {
//   let isAddButton = e.target.dataset.id;
  
//   if (isAddButton) {
//     const idProducto = parseInt(e.target.dataset.id); // lo capturo en el localStorage por ep nombre y no por el id.

//     if (carro.includes(idProducto)) {
//       // Eliminar el idProducto del carro
//       carro = carro.filter(item => item !== idProducto);
//     } else {
//       // Agregar el idProducto al carro
//       carro.push(idProducto);
//     }

//     // Actualizar el localStorage con el nuevo estado del carro
//     localStorage.setItem("carrito", JSON.stringify(carro));

//     // Actualizar el botón
//     toggleButtonColor(e.target, carro.includes(idProducto));


//     if (contenedorCarrito.style.display === "block") {
//       actualizarVistaCarrito();
//     }

//     // Mostrar el estado actualizado del carro en la consola
//     console.log(carro);
//   }
// });

// // Código para manejar la visualización y eliminación en el carrito
// let imagenCarrito = document.getElementById("imagen-carrito");
// let contenedorCarrito = document.querySelector(".container-carrito");

// imagenCarrito.addEventListener("click", callBackCarrito);

// function callBackCarrito() {
//     contenedorCarrito.style.display = "block";

//     actualizarVistaCarrito();


//     // const productosEnCarrito = carro.map(id => productos.find(producto => producto.id === id));
//     // contenedorCarrito.innerHTML = carritoEstructura(productosEnCarrito)
  
//     // // Agregar manejador de eventos para los botones de eliminar productos
//     // contenedorCarrito.querySelectorAll('.eliminar-producto').forEach(button => {
//     //   button.addEventListener('click', handleRemoveProduct);
//     // });
// }





// function handleRemoveProduct(event) {
//     const idProducto = parseInt(event.target.dataset.id)
    
//     // Eliminar el producto del carrito
//     carro = carro.filter(id => id !== idProducto);
    
//     // Actualizar el localStorage
//     localStorage.setItem("carrito", JSON.stringify(carro));
    
//     // Volver a renderizar el carrito
//     // callBackCarrito();

//     actualizarVistaCarrito();

//     const button = cardContainer.querySelector(`button[data-id="${idProducto}"]`);
//     if (button) {
//         toggleButtonColor(button, false);
//     }
// }




// function actualizarVistaCarrito() {
//   const productosEnCarrito = carro.map(id => productos.find(producto => producto.id === id));
//   contenedorCarrito.innerHTML = carritoEstructura(productosEnCarrito);

//   // Agregar manejador de eventos para los botones de eliminar productos
//   contenedorCarrito.querySelectorAll('.eliminar-producto').forEach(button => {
//     button.addEventListener('click', handleRemoveProduct);
//   });
// }



//       let total = 0;


// // Función para crear la estructura del carrito
// function carritoEstructura(productosEnCarrito) {
//     let carrito = `
//       <h1 class="text-4xl">Carrito</h1>
//       <div class="productos-carrito">
//     `;
  
//     // Verificar que productosEnCarrito no esté vacío
//     if (productosEnCarrito.length === 0) {
//       carrito += '<p class="text-center">El carrito está vacío.</p>';
//     } else {

//       // let total = 0;
//       // Generar HTML para cada producto en el carrito
//       productosEnCarrito.forEach(producto => {
//         // Asegurarse de que el producto esté definido
//         if (producto && producto.id) {
          
        
//           total += producto.precio; 
//           carrito += `
//             <div class="producto-carrito flex justify-between items-center p-2 border-b border-gray-200">
//               <img src="${producto.imagen_url}" class="w-20 h-20 object-cover rounded-lg" alt="${producto.producto_nombre}">
//               <div class="detalles-producto flex-1 ml-4">
//                 <h2 class="text-xl font-bold">${producto.producto_nombre}</h2>
//                 <p class="text-gray-600">${producto.descripcion}</p>
//                 <p class="text-gray-800 font-bold">${producto.precio} $</p>
//               </div>
//               <input value="1" type="number" min="1" max="${producto.stock}" onChange="cambiarCantidad(event,${producto.precio})" class="">
//               <button data-id="${producto.id}" class="eliminar-producto bg-red-500 text-white px-3 py-1 rounded-lg">Eliminar</button>
              
//             </div>
//           `;
 


//         } else {
//           console.warn('Producto no válido en carrito:', producto);
//         }
//       });

//       carrito += `
//       <div class="total-carrito text-xl font-bold p-4">
//             <h3>Total:</h3>
//             <p id="precio-total"> ${total} $ </p>
//           </div>
//       `; 
//     }
    
    
//     carrito += `
//     </div>
//   `;
  
//     return carrito;
//   }
  






//   document.querySelectorAll('.agregar-carrito').forEach(button => {
//     button.addEventListener('click', (event) => {
//       const productoId = parseInt(event.target.getAttribute('data-id'));
//       agregarAlCarrito(productoId);
//       toggleButtonColor(event.target, carro.includes(productoId));
//     });
//   });



// function cambiarCantidad(event,precio){

//   // document.getElementById("precio-total").value = "pepito lalata"
  
//   let p = document.getElementById("precio-total")
//   console.log(p);
//   let cantidadCambiada = (event.target.value * precio)
//   p.textContent = cantidadCambiada + total;
  
//   console.log(total);
// }





























































let total = 0;

let select = document.querySelector(".select-producto");

function createOptions(productos) {
  let tiposProductos = [
    ...new Set(productos.flatMap((products) => products.tipo_producto)),
  ].sort();

  tiposProductos.forEach((products) => {
    let option = document.createElement("option");
    option.value = products;
    option.innerHTML = products;
    select.appendChild(option);
  });
}

createOptions(productos);

let carro;

try {
    const carritoStr = localStorage.getItem("carrito");
    carro = JSON.parse(carritoStr) || [];
} catch (e) {
    console.error("Error al analizar el JSON:", e);
    carro = [];
}

let cardContainer = document.querySelector(".card-container");

function createCards(arrayProductos) {
  let card = `
    <article class="w-72 h-full border-black border-2 flex flex-col justify-between bg-red-200 rounded-lg p-5">
      <img src="${arrayProductos.imagen_url}" class="imagenArticulo w-full h-40 object-contain rounded-lg" alt="${arrayProductos.producto_nombre}">
      <h2 class="tituloArticulo text-center font-bold text-2xl">${arrayProductos.producto_nombre}</h2>
      <p class="descripcionArticulo text-center">${arrayProductos.descripcion}</p>
      <div class="flex justify-evenly">
        <p class="precioArticulo font-bold text-center">${arrayProductos.precio} $</p>
        <p class="stockArticulo font-bold text-center">${arrayProductos.stock <= 5 ? 'ultimas ' + arrayProductos.stock + ' unidades' : arrayProductos.stock + ' unidades'}</p>
      </div>
      <button data-name="${arrayProductos.producto_nombre}" data-id="${arrayProductos.id}" class="w-full p-2 ${carro.includes(arrayProductos.id) ? 'bg-red-800 text-white' : 'bg-gray-400 text-white'} text-white rounded-lg mt-3">
        ${carro.includes(arrayProductos.id) ? 'Agregado' : 'Agregar al carrito'}
      </button>
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

let buscadorProducto = document.getElementById("input-buscador-nombre");

const aplicarFiltros = () => {
  const fruta = select.value;
  const buscador = buscadorProducto.value.toLowerCase();

  const productosFiltrados = productos.filter((producto) => {
    const matchesGenre = fruta === "all" || producto.tipo_producto.includes(fruta);
    const matchesSearchTerm = producto.producto_nombre.toLowerCase().includes(buscador);
    return matchesGenre && matchesSearchTerm;
  });
  
  if (productosFiltrados.length === 0) {
    cardContainer.innerHTML = '<h2 class="text-5xl font-bold mb-4">Producto no encontrado</h2>';
  } else {
    addCards(productosFiltrados);
  }
};







select.addEventListener("change", aplicarFiltros);
buscadorProducto.addEventListener("input", aplicarFiltros);

const toggleButtonColor = (button, isInCarro) => {
    if (isInCarro) {
      button.classList.remove('bg-gray-400');
      button.classList.add('bg-red-800');
      button.textContent = 'Agregado';
    } else {
      button.classList.remove('bg-red-800');
      button.classList.add('bg-gray-400');
      button.textContent = 'Agregar al carrito';
    }
};

cardContainer.addEventListener("click", (e) => {
  let isAddButton = e.target.dataset.id;
  
  if (isAddButton) {
    const idProducto = parseInt(e.target.dataset.id);

    if (carro.includes(idProducto)) {
      carro = carro.filter(item => item !== idProducto);
    } else {
      carro.push(idProducto);
    }

    localStorage.setItem("carrito", JSON.stringify(carro));
    toggleButtonColor(e.target, carro.includes(idProducto));

    if (contenedorCarrito.style.display === "block") {
      actualizarVistaCarrito();
    }

    console.log(carro);
  }
});

let imagenCarrito = document.getElementById("imagen-carrito");
let contenedorCarrito = document.querySelector(".container-carrito");

imagenCarrito.addEventListener("click", callBackCarrito);

function callBackCarrito() {
    contenedorCarrito.style.display = "block";
    actualizarVistaCarrito();
}



function actualizarVistaCarrito() {
  const productosEnCarrito = carro.map(id => productos.find(producto => producto.id === id));
  contenedorCarrito.innerHTML = carritoEstructura(productosEnCarrito);

  contenedorCarrito.querySelectorAll('.eliminar-producto').forEach(button => {
    button.addEventListener('click', handleRemoveProduct);
  });
}

function handleRemoveProduct(event) {
  const idProducto = parseInt(event.target.dataset.id);
  carro = carro.filter(id => id !== idProducto);
  localStorage.setItem("carrito", JSON.stringify(carro));
  actualizarVistaCarrito();

  let button = cardContainer.querySelector(button[`data-id=${idProducto}`]);
  if (button) {
      toggleButtonColor(button, false);

  }

  
}

function carritoEstructura(productosEnCarrito) {
    let carrito = `
      <h1 class="text-4xl">Carrito</h1>
      <div class="productos-carrito">
    `;
  
    if (productosEnCarrito.length === 0) {
      carrito += '<p class="text-center">El carrito está vacío.</p>';
    } else {
      total = 0;

      productosEnCarrito.forEach(producto => {
        if (producto && producto.id) {
          total += producto.precio;

          carrito += `
            <div class="producto-carrito flex justify-between items-center p-2 border-b border-gray-200">
              <img src="${producto.imagen_url}" class="w-20 h-20 object-cover rounded-lg" alt="${producto.producto_nombre}">
              <div class="detalles-producto flex-1 ml-4">
                <h2 class="text-xl font-bold">${producto.producto_nombre}</h2>
                <p class="text-gray-600">${producto.descripcion}</p>
                <p class="text-gray-800 font-bold">${producto.precio} $</p>
              </div>
              <input value="1" type="number" min="1" max="${producto.stock}" data-precio="${producto.precio}" onChange="cambiarCantidad(event, ${producto.precio})" class="">
              <button data-id="${producto.id}" class="eliminar-producto bg-red-500 text-white px-3 py-1 rounded-lg">Eliminar</button>
            </div>
          `;
        } else {
          console.warn('Producto no válido en carrito:', producto);
        }
      });

      carrito += `
      <div class="total-carrito text-xl font-bold p-4">
            <h3>Total:</h3>
            <p id="precio-total">${total} $</p>
          </div>
      `;
    }

    carrito += `
    </div>
  `;
  
    return carrito;
}

function cambiarCantidad(event, precio) {
  let input = event.target;
  let cantidad = parseInt(input.value, 10);
  let totalElement = document.getElementById("precio-total");

  let productos = document.querySelectorAll('.producto-carrito');
  total = 0;

  productos.forEach(producto => {
    let cantidadInput = producto.querySelector('input[type="number"]');
    let productoPrecio = parseFloat(cantidadInput.getAttribute('data-precio'));
    total += parseInt(cantidadInput.value, 10) * productoPrecio;
  });

  totalElement.textContent = `${total}$` ;
}

