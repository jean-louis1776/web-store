'use strict';

class Items {
    constructor(title, price, img) {
        this._title = title;
        this._price = price;
        this._img = img;
    }

    getPrice() {
        return this._price;
    }

    render() {
        return `<div class="card"><div class="card__top view"><img src="${this._img}"><div class="mask"><a href="#"><img src="img/cart-white.svg" alt=""><span>Add to Cart</span></a></div></div><div class="card__bottom"><a href="#"><p class="card__title">${this._title}</p><p class="card__price">${this._price}</p></a></div></div>`;
    }
}

class ItemsInCart extends Items {
    constructor(title, price, quantity = 1) {
        super(title, price);

        this._quantity = quantity;
    }

    getPrice() {
        return this._price * this.quantity;
    }

    render() {
        return `<div class="card"><div class="card__top view"><img src="${this._img}"><div class="mask"><a href="#"><img src="img/cart-white.svg" alt=""><span>Add to Cart</span></a></div></div><div class="card__bottom"><a href="#"><p class="card__title">${this._title}</p><p class="card__price">${this._price}</p></a></div></div>`;
    }
}

class ItemsList {
    constructor(items, container) {
        this._items = items;
        this._$itemsListContainer = container
    }

    renderItemsList() {
        let itemsList = this._items.map(
            items => items.render()
        ).join(' ');

        this._$itemsListContainer.insertAdjacentHTML('beforeend', itemsList);
    }
}

const list = new ItemsList([
    new Items('Mango People T-shirt', '$52.00', 'img/card-1.png'),
    new Items('Mango People T-shirt', '$52.00', 'img/card-2.png'),
    new Items('Mango People T-shirt', '$52.00', 'img/card-3.png'),
    new Items('Mango People T-shirt', '$52.00', 'img/card-4.png'),
    new Items('Mango People T-shirt', '$52.00', 'img/card-5.png'),
    new Items('Mango People T-shirt', '$52.00', 'img/card-6.png'),
    new Items('Mango People T-shirt', '$52.00', 'img/card-7.png'),
    new Items('Mango People T-shirt', '$52.00', 'img/card-8.png'),
], document.querySelector('.card_box'))

const cart = new ItemsList([
    new ItemsInCart('Mango People T-shirt', '$52.00', 'img/card-1.png'),
    new ItemsInCart('Mango People T-shirt', '$52.00', 'img/card-2.png'),
], document.querySelector('.cart'))

list.renderItemsList();