const jwt = require('jsonwebtoken')

const auth = (req , res , next) => {
    console.log('entered')
    // const token = req.header('x-auth-token');
    // console.log(token)

    console.log(req.rawHeaders[1])
    
    // const authHeader = req.header['authorization'];
    const authHeader = req.rawHeaders[1];

    console.log('authHeader')
    const token = authHeader && authHeader.split(' ')[1];

    if(!token) return res.status(401).json({ message : 'No token , authrization deniend' })

    try {
        
        jwt.verify(token , process.env.JWT_SECRET , (err,user) => {
            if(err) return res.status(403).send("Access denied, invalid token")
            req.user = user;
            next(); 
        })
        

    } catch (error) {
        res.status(401).json({ message : 'Token is not valid' })
    }
}

module.exports = auth;