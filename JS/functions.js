function toggleClass(element, className) {
    element.classList.toggle(className);
}

const header = document.querySelector("header");
const cartIcon = document.querySelector(".header__icon.cart-container");
const cart = document.querySelector(".cart");
const menuIcon = document.querySelector(".header__icon");
const sideMenu = document.querySelector(".side-menu");
const closeMenuIcon = document.querySelector(".menu__close-menu");
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
    deleteIcon.addEventListener('click', () => {
        cartItem.remove();
        cartCount--;
        updateCartCount();
    });
}

cartIcon.addEventListener("click", () => toggleClass(cart, "show"));
menuIcon.addEventListener("click", () => toggleClass(sideMenu, "showmenu"));
closeMenuIcon.addEventListener("click", () => sideMenu.classList.remove("showmenu"));

addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const productItem = e.target.closest('.products__item');
        const productName = productItem.querySelector('.products__name').textContent;
        const productPrice = parseFloat(productItem.querySelector('.products__price').textContent.replace(/[^\d.]/g, ''));
        const productImage = productItem.querySelector('img').src;

        updateCart(productName, productPrice, productImage);
    });
});

