let input = document.getElementById("inputSearch");

input.addEventListener("keydown", (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {

        console.log(input.value);
        window.localStorage.setItem("search", input.value);
        window.location.href = "pages/products.html";

    }
})
console.log(input);