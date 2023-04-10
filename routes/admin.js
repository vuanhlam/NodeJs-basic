const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin')


/** 
 ** /admin/add-product => GET
 ** /admin/product and have method is GET will reach this route
 */
router.get('/add-product', adminController.getAddedProduct)

/** 
 ** /admin/products => GET
 **
 */
router.get('/products', adminController.getProducts)


/**
 ** /admin/product => POST 
 ** /admin/product and have method is POST will reach this route
 */
router.post('/add-product', adminController.addNewProduct)

/**
 ** admin/edit-product/:productId
 */
router.get('/edit-product/:productId', adminController.getEditProduct)

router.post('/edit-product')

module.exports = router