const express = require('express')
const { register , login, hello } = require('../controller/authController')
const auth = require('../middlewares/middleAuth')
const { getProductList , getProductdetials } = require('../controller/productController');
const { viewCart, addToCart } = require('../controller/cartController');

const router = express.Router();

router.post('/register' , register);
router.post('/login' , login)
router.get('/get-product-name' , auth , getProductList);
router.post('/get-product-desc/:id' , auth ,  getProductdetials)
router.get('/view-cart/:id' , auth , viewCart)
router.post('/add-to-cart' , auth , addToCart)

router.get('/protected' , auth , (req,res) => {
    res.status(200).send({message : "Access granted!!!"})
});

router.post('/hello' , hello)

module.exports = router; 