const {createProduct, fetchAllProducts, fetchAllProductsById, updateProduct} = require("../controller/Product")
const express = require('express');

const router = express.Router();
// /products is already in the system 
router.post('/' , createProduct)
.get('/',fetchAllProducts)
.get('/:id',fetchAllProductsById)
.patch('/:id',updateProduct)

exports.router = router ; 