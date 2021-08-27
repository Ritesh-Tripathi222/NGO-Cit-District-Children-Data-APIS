const express = require("express")
const mongoose = require("mongoose")
//const dotenv  = require("dotenv")
const cors = require('cors')
const userRoute = require("./routes/routes");


//sdotenv.config()

const app  = express()
app.use(cors())

app.use(express.json())

app.use("/api", userRoute);

//Assign MongoDB connection string to Uri and declare options settings
var  uri = "mongodb+srv://ritesh:8127@cluster0.ey1dg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

// Declare a variable named option and assign optional settings
const  options = {
useNewUrlParser:  true,
useUnifiedTopology:  true
};

// Connect MongoDB Atlas using mongoose connect method
mongoose.connect(uri, options).then(() => {
console.log("Database connection established!");
},
err  => {
{
console.log("Error connecting Database instance due to:", err);
}

});
app.listen(5000,()=> {
    console.log("server is up and running")
});