const products = require('../models/products')
  

const getProductList = (req,res) => {
    
    // console.log('eneter get product name')
    const productList = products.map(product => ({id : product.id , name : product.name}));
    // console.log(productList)
    res.status(200).json({productList : productList})

}

const getProductdetials = (req,res) => {

    const productId = parseInt(req.params.id , 10)
    const product = products.find((p) => p.id === productId);

    if(product) {
        res.status(200).json({product : product});
    }
    else{
        res.status(404).json({message : 'Product not found'})
    }

}

module.exports = { getProductList , getProductdetials }