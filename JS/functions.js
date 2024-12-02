const header = document.querySelector("header");
const cartIcon = header.lastElementChild // Agregué el punto aquí
const cart = document.querySelector(".cart");

console.log(header); 

cartIcon.addEventListener("click", () => {
    cart.classList.toggle("show"); // Muestra/oculta el carrito
});
