const express = require("express")
require("express-async-errors")
require("dotenv")
const mongoose = require('mongoose');
import errMiddleware from "./middleware/endMiddleware";
import notFound from "./middleware/notFound";
import userRoute from "./routes/userRoutes"


//initial config 
const app = express()


//start middleware 
app.use(express.json())


//routes
app.use("/auth",userRoute)


//end middleware
app.use(notFound)
app.use(errMiddleware)



//start server 

const uri =process.env.MONGO_URI || "mongodb+srv://scelogumede95:72664453@practice.kmvig.mongodb.net/JobsDatabasese?retryWrites=true&w=majority&appName=practice";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    app.listen(4000,()=> console.log("server is running successfully"))
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  }catch(err){
    // Ensures that the client will close when you finish/error
    console.log("theres a problem in the server")
    console.error(err)
  }
}
run();


