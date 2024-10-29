// //import express module
// const express = require('express');

// //creates express application
// const app = express();
// const port = 3000;

// //basic routing for '/' 
// app.get('/' , (req , res) => {
//     res.send('Hello World!!');
// })

// //makes application to listen to port 3000
// app.listen(port , () => {
//     console.log(`Server is running on port ${port}`);
// });



// used to load env variables from .env to process.env
require('dotenv').config();



const express = require('express')
const authRoutes = require('./src/routes/route')

const app = express();
app.use(express.json())

app.use('/api/auth' , authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT , () => {
    console.log(`application is running on port ${PORT}`)
})