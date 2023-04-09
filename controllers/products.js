const Product = require("../models/product");

exports.getAddedProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "admin/add-product",
  });
};

exports.addNewProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
      res.render("shop", {
        prods: products,
        pageTitle: "My Shop",
        path: "/",
        hasProducts: products.length > 0,
      });
  });
};
