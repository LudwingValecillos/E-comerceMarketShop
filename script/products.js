

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








//--------CREANDO EL EVENTO DEL SELECT =>  OPTIONS

// select.addEventListener("input", (event) => {

//     event.preventDefault();

//     let selectedValue = select.value;
//     console.log(selectedValue);

//     if (selectedValue === "all" || selectedValue === "") {
//         addCards(productos);
//         return;
//     }



//     let productoTipo = productos.filter((producto) => {

//         return producto.tipo_producto === selectedValue;
//     });
    


//     addCards(productoTipo);

// })




// //--------CREANDO EL EVENTO DEL INPUT TYPE => TEXT

// let buscadorProducto = document.getElementById("input-buscador-nombre");
// console.log(buscadorProducto);

// buscadorProducto.addEventListener("input",(event) =>{

//     let buscadorProductoValor = buscadorProducto.value.toLowerCase();

//     console.log(buscadorProductoValor);

//     event.preventDefault();
//     if(buscadorProductoValor === ""){
//         return addCards(productos);
//     }else{
        
//     }



//     let productosFiltrados = productos.filter((producto) =>{

//         return producto.producto_nombre.toLowerCase().includes(buscadorProductoValor) ;  
//     }); 

//     console.log(productosFiltrados);

//     if (productosFiltrados.length === 0) {
//         cardContainer.innerHTML = "Producto no encontrado";
//     } else {
//         console.log(productosFiltrados);
//     }
// });





// let buscadorProducto = document.getElementById("input-buscador-nombre");

// select.addEventListener("input", (event) => {
// buscadorProducto.addEventListener("input",(event) =>{