const { fetchBrands} = require("../controller/Brand")
const express = require('express');
const { createCategory } = require("../controller/Category");

const router = express.Router();
// /products is already in the system 
router.get('/' , fetchBrands).post('/',createCategory)


exports.router = router ; 