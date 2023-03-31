// use local storage to manage cart data
const addToDb = id => {
    let bookCart = getBookCart();
    // add quantity
    const quantity = bookCart[id];
    if (!quantity) {
        bookCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        bookCart[id] = newQuantity;
    }
    localStorage.setItem('book-cart', JSON.stringify(bookCart));
}

const removeFromDb = id => {
    const bookCart = getBookCart();
    if (id in bookCart) {
        delete bookCart[id];
        localStorage.setItem('book-cart', JSON.stringify(bookCart));
    }
}

const getBookCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('book-cart');
    if (storedCart) {
        bookCart = JSON.parse(storedCart);
    }
    return bookCart;
}

const deleteBookCart = () => {
    localStorage.removeItem('book-cart');
}

export {
    addToDb,
    removeFromDb,
    getBookCart,
    deleteBookCart
}