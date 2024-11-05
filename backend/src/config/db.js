// const mongoose = require('mongoose')

// const connectDb = async () => {
//     try {
        
//         await mongoose.connect(process.env.MONGO_URI , {
//             useNewUrlParser: true,
//           useUnifiedTopology: true,
//         });
//         console.log('MongoDb connected');
//     } catch (error) {
//         console.error(error.message);
//         process.exit(1);
//     }
// }





const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://antony:antony@mern-cluster-0.j1uwc.mongodb.net/<your-database-name>?retryWrites=true&w=majority&appName=mern-cluster-0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  tls: true, // Explicitly enable TLS if it's required by the server
});

const connectDb = async function run() {
  try {
    await client.connect();
    await client.db("<your-database-name>").command({ ping: 1 }); // Replace with your actual database name
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Connection error:", error); // Added clarity to error logging
  } finally {
    await client.close();
  }
}

connectDb().catch(console.dir);
module.exports = connectDb;
