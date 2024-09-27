const express = require("express")
require("express-async-errors")
require("dotenv").config()
const mongoose = require('mongoose');
import errMiddleware from "./middleware/general/endMiddleware";
import notFound from "./middleware/general/notFound";
import userRoute from "./routes/auth/userRoutes"
import nodemailer from "nodemailer"
import loggedIn from "./routes/company/profile"
import auth from "./middleware/general/authMiddleware";
import userProfile from "./routes/user/loggedUserRoutes"
import jobs from "./routes/company/jobs"
import apply from "./routes/user/applicationRoutes"
import cors from "cors"



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
app.use(cors())


//routes
app.use("/auth",userRoute)
app.use("/home",auth,userProfile)
app.use("/home",auth,loggedIn)
app.use("/home",auth,jobs)
app.use("/home",auth,apply)


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


