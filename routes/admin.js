const express = require('express');
const path = require('path')
const router = express.Router();
const rootDir = require('../utils/path')


const products = []

/**
 ** /admin/add-product => GET
 ** /admin/product and have method is GET will reach this route
 */
router.get('/add-product', (req, res, next) => {
    res.render('add-product.ejs', {pageTitle: 'Add Product', path: 'admin/add-product'})
})

/**
 ** /admin/product => POST 
 ** /admin/product and have method is POST will reach this route
 */
router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title})
    res.redirect('/')
})

exports.routes = router;
exports.products = products