const jwt = require('jsonwebtoken')
const users = require('../models/user')

const auth = (req , res , next) => {
    console.log('entered')
    // const token = req.header('x-auth-token');
    // console.log(token)

    // console.log('From jwt checking page line 8 : ' , req.headers['authorization'])
    
    const authHeader = req.headers['authorization'];

    // console.log('req : ' , req )
    const token = authHeader && authHeader.split(' ')[1];
    // console.log('From jwt checking page line 14 : ' ,token)
    if(!token) return res.status(401).json({ message : 'No token , authrization deniend' })

    try {
        a = jwt.verify(token , process.env.JWT_SECRET).userName
        // console.log('From jwt checking page line 18 : ' ,users.find(user => user.userName === a))
        jwt.verify(token , process.env.JWT_SECRET , (err,user) => {
            if(err) return res.status(403).send({message : "Access denied, invalid token"})
            req.user = user;
            next(); 
        })
        

    } catch (error) {
        res.status(401).json({ message : 'Token is not valid' })
    }
} 

module.exports = auth;