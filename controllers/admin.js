const Product = require("../models/product");

exports.getAddedProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "admin/add-product",
    edit: false
  });
};

exports.addNewProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const desc = req.body.desc
  const product = new Product(title, imageUrl, desc, price);
  product.save();
  res.redirect("/");
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if(!editMode) {
    return res.redirect('/')
  }
  const proId = req.params.productId;
  Product.findById(proId, (product) => {
    if(!product) {
      return redirect('/');
    }
    res.render("admin/edit-product", {
      pageTitle: "Edit Product",
      path: "admin/add-product",
      edit: editMode,
      product: product
    });
  })
};

exports.postEditProduct = (req, res, next) => {
  
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,  
      pageTitle: "Admin Products",
      path: "/admin/products",
    });
  });
};
