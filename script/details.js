let productoDetalle = document.querySelector(".producto");



const urlParams = new URLSearchParams(window.location.search); 
const produtoSeleccionado = urlParams.get('id');

console.log(produtoSeleccionado);

const productoSeleccionadoParaDetalle = productos.find(producto => producto.id == produtoSeleccionado)

console.log(productoSeleccionadoParaDetalle);



function crearDetalle(array){
    let detalles = `                <div class="md:w-1/2 p-4">
                    <img class="w-full h-auto rounded-xl" src="${array.imagen_url}" alt="${array.producto_nombre} title=${array.producto_nombre}">
                </div>
                <div class="md:w-1/2 p-4 flex flex-col justify-center">
                    <h2 class="text-4xl md:text-6xl text-white mb-2">${array.producto_nombre}</h2>
                    <p class="text-xl md:text-3xl text-white mb-4">${array.descripcion}</p>
                    <p class="text-2xl md:text-5xl font-bold text-white mb-4">$${array.precio}</p>
                    <div class="flex items-center gap-2">
                        <p class="text-xl text-white">Puntuación:</p>
                        <div class="star-rating flex">
                            <input type="radio" id="5-stars" name="rating" value="5">
                            <label for="5-stars" class="fa fa-star"></label>
                            <input type="radio" id="4-stars" name="rating" value="4">
                            <label for="4-stars" class="fa fa-star"></label>
                            <input type="radio" id="3-stars" name="rating" value="3">
                            <label for="3-stars" class="fa fa-star"></label>
                            <input type="radio" id="2-stars" name="rating" value="2">
                            <label for="2-stars" class="fa fa-star"></label>
                            <input type="radio" id="1-star" name="rating" value="1">
                            <label for="1-star" class="fa fa-star"></label>
                        </div>
                    </div>
                </div>
            </div>`
            productoDetalle.innerHTML = detalles;
}




crearDetalle(productoSeleccionadoParaDetalle)

