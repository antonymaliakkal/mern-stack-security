const express = require('express')
const { register , login } = require('../controller/authController')
const auth = require('../middlewares/middleAuth')


const router = express.Router();

router.post('/register' , register);
router.post('/login' , login)

router.get('/protected' , auth , (req,res) => {
    res.send("Access granted!!!")
});

module.exports = router;