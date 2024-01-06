const { Product } = require("../model/Product");

exports.createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        const savedProduct = await product.save();
        
        res.status(201).json(savedProduct);
       
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: 'Failed to create product' });
    }
};


exports.fetchAllProducts = async (req, res) => {
    let query = Product.find({});
    // This will Result in Searching all of the Objects
    let totalProductsQuery = Product.find({});

    if(req.query.category){
        query = query.find({category:req.query.category});
        totalProductsQuery = totalProductsQuery.find({
            category:req.query.category
        });
    }

    if (req.query.brand) {
        query = query.find({ brand: req.query.brand });
        totalProductsQuery = totalProductsQuery.find({ brand: req.query.brand });
      }

      // TODO : How to get the Sort on discounbted Proce Not on the Actual Price
      if(req.query._sort && req.query._order){
        query = query.sort({ [req.query._sort]:
        req.query._order});
      }

      const totalDocs = await 
      totalProductsQuery.count().exec();
      
      console.log({totalDocs})


      if(req.query._page && req.query._limit){
        const pageSize = req.query._limit;
        const page = req.query._page;
        query = query.skip(pageSize * (page - 1)).limit(pageSize);     
     }


     try {
        const docs = await query.exec();
        res.set('X-Total-Count', totalDocs);
        res.status(200).json(docs);
      } catch (err) {
        res.status(400).json(err);
      }
};
