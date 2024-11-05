const express = require('express')
const { register , login, hello } = require('../controller/authController')
const auth = require('../middlewares/middleAuth')


const router = express.Router();

router.post('/register' , register);
router.post('/login' , login)

router.get('/protected' , auth , (req,res) => {
    res.send("Access granted!!!")
});

router.post('/hello' , hello)

module.exports = router;