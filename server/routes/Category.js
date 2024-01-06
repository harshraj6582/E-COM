const express = require('express');
const { fetchCategories, createCategory } = require("../controller/Category");
const { createBrand } = require('../controller/Brand');

const router = express.Router();
// /products is already in the system 
router.get('/' , fetchCategories).post('/',createCategory)


exports.router = router ; 