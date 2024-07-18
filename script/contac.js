console.log("holaaa");


let boton = document.getElementById("boton");
console.log(boton);

boton.addEventListener("click",callBackButon);


function callBackButon(event){
    // event.preventDefault();
    let evento = alert("el formulario se ha enviado correctamente");

     return   evento;
    // event.submit();
}

// callBackButon()