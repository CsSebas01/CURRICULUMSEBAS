let btnCart = document.querySelector('.container-icon')
let containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle
    ('hidden-cart')
})

