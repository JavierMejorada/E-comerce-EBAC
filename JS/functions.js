const header = document.querySelector("header");
const cartIcon = header.lastElementChild 
const cart = document.querySelector(".cart");

console.log(header); 

cartIcon.addEventListener("click", () => {
    cart.classList.toggle("show"); 
});

const menuIcon = document.querySelector(".header__icon");  
const sideMenu = document.querySelector(".side-menu"); 
const closeMenuIcon = document.querySelector(".menu__close-menu"); 

menuIcon.addEventListener("click", () => {
    sideMenu.classList.toggle("showmenu");  
});

closeMenuIcon.addEventListener("click", () => {
    sideMenu.classList.remove("showmenu");  
});

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsContainer = document.querySelector('.cart__items');
const cartCountElement = document.querySelector('.cart-count');

let cartCount = 0;

function updateCartCount() {
    cartCountElement.textContent = cartCount;
}

function updateCart(productName, productPrice, productImage) {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart__item');
    cartItem.innerHTML = `
        <img src="${productImage}" alt="${productName}" class="cart__image">
        <p class="cart__name">${productName}</p>
        <p class="cart__price">$${productPrice}</p>
        <i class="cart__delete-icon"><img src="img/kindpng_1082635.png" alt="Icono quitar vehículo"></i>
    `;

    cartItemsContainer.appendChild(cartItem);
    cartCount++;
    updateCartCount();

    const deleteIcon = cartItem.querySelector('.cart__delete-icon');
    deleteIcon.style.width = "100px";
    deleteIcon.style.height = "100px";
    deleteIcon.addEventListener('click', () => {
        cartItem.remove();
        cartCount--;
        updateCartCount();
    });
}

addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const productItem = e.target.closest('.products__item'); 
        const productName = productItem.querySelector('.products__name').textContent; 
        const productPrice = productItem.querySelector('.products__price').textContent.replace('$', '').replace(',', ''); 
        const productImage = productItem.querySelector('img').src;

        updateCart(productName, productPrice, productImage);
    });
});
