

//---------CREANDDO LOS INPUT Y LOS SELECT

let select = document.querySelector(".select-producto");

function createOptions(productos) {



    // let tiposProductos = productos.map(producto => producto.tipo_producto);
    // tiposProductos.unshift("todos");
let tiposProductos = [...new Set(productos.flatMap((products) => products.tipo_producto))].sort();
console.log(tiposProductos);


    tiposProductos.forEach((products) => {
console.log(products);
        let option = document.createElement('option');
        // option.innerHTML = "elige el genero";
        option.value = products ;
        option.innerHTML = products;
        select.appendChild(option);
    });
}

createOptions(productos)




//--------CREANDO EL EVENTO DEL SELECT ===> TIPO DE PRODUCTO.(NO PRESTARLE ATENCION)

// let precioMaximo = document.querySelector(".precio-maximo")

// precioMaximo.addEventListener("input", event => {

//     event.preventDefault();

//     let productosPrecioMaximo = productos.filter(productos => productos.precio <= precioMaximo.value);

//     console.log(productosPrecioMaximo);
// })





//--------CREANDO EL EVENTO DEL INPUT TYPE => TEXT

select.addEventListener("input", event => {

    event.preventDefault();

console.log(select.value);

    let preductoTipo = productos.filter(producto => producto.tipo_producto === select.value);
    console.log(preductoTipo);
})



//--------CREANDO EL EVENTO DEL INPUT TYPE => TEXT


// let buscadorProducto = document.getElementById("buscador-producto");

// buscadorProducto.addEventListener("input",(event) =>{

//     let buscadorProductoValor = buscadorProducto.value.toLowerCase();

//     event.preventDefault();
//     if(buscadorProductoValor === ""){


//         return;
//     }



//     let productosFiltrados = productos.filter((producto) =>{

//         return producto.producto_nombre.toLowerCase().includes(buscadorProductoValor) ;  
//     }); 

//     console.log(productosFiltrados);

//     if (productosFiltrados.length === 0) {
//         console.log("Producto no encontrado");
//     } else {
//         console.log(productosFiltrados);
//     }
// });




//------------CREANDO LA ESTRUCTURA DE LA CARTA--------------//


let cardContainer = document.querySelector(".card-container");
console.log(cardContainer);


function createCards(arrayProductos){


    let card = `

    <article class="w-72 h-full border-black border-2 flex flex-col justify-between bg-red-200 rounded-lg p-5">
            <img src="${arrayProductos.imagen_url}" class="imagenArticulo w-full h-40 objet-contain rounded-lg" alt="${arrayProductos.producto_nombre}">
            <h2 class="tituloArticulo text-center font-bold text-2xl">${arrayProductos.producto_nombre}</h2>
            <p class="descripcionArticulo text-center ">${arrayProductos.descripcion}</p>
            <div class="flex justify-evenly">
                <p class="precioArticulo font-bold text-center">${arrayProductos.precio} $</p>
                <p class="stockArticulo font-bold text-center">${arrayProductos.stock} unidades</p>
            </div>

                <button id="boton" class="w-full p-2 bg-gray-400 text-white rounded-lg mt-3">Agregar al carrito</button>
    </article>




`    
        return card

}



function addCards(productos) {
    
    cardContainer.innerHTML = '';
    let respuesta = "";
    console.log(productos);
    productos.forEach(item => {
        respuesta += createCards(item);
    });
    cardContainer.innerHTML += respuesta;
}


addCards(productos);





//------------CREANDO LOS FILTROS CRUZADOS--------------//





