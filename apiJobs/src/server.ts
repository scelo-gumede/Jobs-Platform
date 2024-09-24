const express = require("express")
require("express-async-errors")
require("dotenv").config()
const mongoose = require('mongoose');
import errMiddleware from "./middleware/endMiddleware";
import notFound from "./middleware/notFound";
import userRoute from "./routes/userRoutes"
import nodemailer from "nodemailer"
import loggedIn from "./routes/companyRoutes"
import auth from "./middleware/authMiddleware";


//initial config 
const app = express()
export const transporter = nodemailer.createTransport({
  "service":"gmail",
  auth:{
    user:process.env.GMAIL_USER,
    pass:process.env.GMAIL_PASS
  }

})




//start middleware 
app.use(express.json())


//routes
app.use("/auth",userRoute)
app.use("/home",auth,loggedIn)


//end middleware
app.use(notFound)
app.use(errMiddleware)



//start server 

const uri =process.env.MONGO_URI  

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


