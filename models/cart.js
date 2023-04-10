const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "cart.json"
);

module.exports = class Cart {
  static addProduct(id, productPrice) {
    // Fetch the previous cart
    fs.readFile(p, (err, fileContent) => {
        let cart = {products: [], totalPrice: 0};
        if(!err) {
            if(fileContent) {
                cart = JSON.parse(fileContent);
            }
        }
        /**
         ** find existing product   
         */
        const existingProduct = cart.products.reduce((acc, curValue, index) => {
            return curValue.id === id ? {index: index, product: curValue} : acc
        }, {})
        console.log({existingProduct});
        /**
         **add new product / increase quantity
         */
        let updatedProduct;
        if(Object.keys(existingProduct).length > 0) {
            updatedProduct = {...existingProduct.product}
            updatedProduct.qty = updatedProduct.qty + 1;
            cart.products[existingProduct.index] = updatedProduct;
        }else {
            updatedProduct = {id: id, qty: 1}
            cart.products = [...cart.products, updatedProduct];
        }
        cart.totalPrice = cart.totalPrice + +productPrice
        fs.writeFile(p, JSON.stringify(cart), (err) => {
            console.log(err);
        })
    })
  }
};
