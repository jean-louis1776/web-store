'use strict';

const items = [
    { title: 'Mango People T-shirt', price: '$52.00', img: 'img/product-1.png' },
    { title: 'Mango People T-shirt', price: '$52.00', img: 'img/product-2.png' },
    { title: 'Mango People T-shirt', price: '$52.00', img: 'img/product-3.png' },
    { title: 'Mango People T-shirt', price: '$52.00', img: 'img/product-4.png' },
    { title: 'Mango People T-shirt', price: '$52.00', img: 'img/product-5.png' },
    { title: 'Mango People T-shirt', price: '$52.00', img: 'img/product-6.png' },
    { title: 'Mango People T-shirt', price: '$52.00', img: 'img/product-7.png' },
    { title: 'Mango People T-shirt', price: '$52.00', img: 'img/product-8.png' },
    { title: 'Mango People T-shirt', price: '$52.00', img: 'img/product-9.png' },
];

const $itemsList = document.querySelector('.card_box');

const renderItems = ({ title, price, img }) => {
    return `<div class="card"><div class="card__top view"><img src="${img}"><div class="mask"><a href="#"><img src="img/cart-white.svg" alt=""><span>Add to Cart</span></a></div></div><div class="card__bottom"><a href="#"><p class="card__title">${title}</p><p class="card__price">${price}</p></a></div></div>`;
};

const renderItemsList = (list = items) => {
    let itemsList = list.map(
        item => renderItems(item)
    ).join('');

    $itemsList.insertAdjacentHTML('beforeend', itemsList);
};

renderItemsList();