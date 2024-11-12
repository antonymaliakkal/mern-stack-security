// used to load env variables from .env to process.env
require('dotenv').config();



const express = require('express')
const authRoutes = require('./src/routes/route')
const cors = require('cors')
const connectDb = require('./src/config/db')

const app = express();
app.use(express.json())
app.use(cors())
app.use('/api/auth' , authRoutes);


// connectDb();

const PORT = process.env.PORT || 5000;
app.listen(PORT , () => {
    console.log(`application is running on port ${PORT}`)
})