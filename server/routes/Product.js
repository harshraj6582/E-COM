const {createProduct, fetchAllProducts} = require("../controller/Product")
const express = require('express');

const router = express.Router();
// /products is already in the system 
router.post('/' , createProduct)
.get('/',fetchAllProducts)

exports.router = router ; 