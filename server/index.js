const {createProduct} = require("../server/controller/Product")
const express = require('express');
const server = express();
const mongoose = require('mongoose')
const productRouters = require('../server/routes/Product')
const categoriesRouters = require('./routes/Category')
const brandsRouters = require('./routes/Brands')
const cors = require('cors')
// Middleware 




server.use(express.json());
// To Convert the Data Into JSON Format 




server.use(cors({
  exposedHeaders:['X-Total-Count']
}))
server.use('/products',productRouters.router)
server.use('/categories',categoriesRouters.router)
server.use('/brands',brandsRouters.router)



main().catch(err=> console.log(err))

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  console.log("DataBase is Connected Successfully  ")
}


server.get('/' , (req,res)=>{
    res.json({status: 'success'})
})



   
    



server.listen(8080 , () =>{
    console.log("Server started ")
})