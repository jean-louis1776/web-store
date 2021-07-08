'use strict';

const items = [
    { title: 'BLAZE LEGGINGS', price: '$52.00', img: 'img/blaze.png' },
    { title: 'ALEXA SWEATER', price: '$52.00', img: 'img/sweater.png' },
    { title: 'AGNES TOP', price: '$52.00', img: 'img/top.png' },
    { title: 'SYLVA SWEATER', price: '$52.00', img: 'img/sylva.png' },
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