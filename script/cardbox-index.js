'use strict';

const items = [
    { title: 'Mango People T-shirt', price: '$52.00', img: 'img/card-1.png' },
    { title: 'Mango People T-shirt', price: '$52.00', img: 'img/card-2.png' },
    { title: 'Mango People T-shirt', price: '$52.00', img: 'img/card-3.png' },
    { title: 'Mango People T-shirt', price: '$52.00', img: 'img/card-4.png' },
    { title: 'Mango People T-shirt', price: '$52.00', img: 'img/card-5.png' },
    { title: 'Mango People T-shirt', price: '$52.00', img: 'img/card-6.png' },
    { title: 'Mango People T-shirt', price: '$52.00', img: 'img/card-7.png' },
    { title: 'Mango People T-shirt', price: '$52.00', img: 'img/card-8.png' },
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