const express = require('express')
const { register , login, hello } = require('../controller/authController')
const auth = require('../middlewares/middleAuth')
const { getProductList , getProductdetials } = require('../controller/productController')

const router = express.Router();

router.post('/register' , register);
router.post('/login' , login)
router.get('/get-product-name' , getProductList);
router.post('/get-product-desc/:id' , getProductdetials)

router.get('/protected' , auth , (req,res) => {
    res.status(200).send({message : "Access granted!!!"})
});

router.post('/hello' , hello)

module.exports = router;