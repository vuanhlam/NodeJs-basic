const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products')


/**
 ** /admin/add-product => GET
 ** /admin/product and have method is GET will reach this route
 */
router.get('/add-product', productsController.getAddedProduct)

/**
 ** /admin/product => POST 
 ** /admin/product and have method is POST will reach this route
 */
router.post('/add-product', productsController.addNewProduct)

module.exports = router