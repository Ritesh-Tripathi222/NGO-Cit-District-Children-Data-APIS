const bcrypt = require("bcryptjs");
const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken")
const auth = require("../middleware/auth");

const app = express();

app.use(express.json({ limit: "50mb" }));
require("dotenv").config();


const addUsers = async (req, res, next) => {
    try {
      //Get Json data passed in request
      const { first_name, last_name, email, password } = req.body;
  
      // data validation
      if (!(email && password && first_name && last_name)) {
        res.status(400).send("All input is required");
      }
      const oldUser = await User.findOne({ email });
  
      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }
  
      //Password hash encryption
      encryptedPassword = await bcrypt.hash(password, 10);
  
      // Create user in our database
      const user = await User.create({
        first_name,
        last_name,
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
      });
  
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      // save user token
      user.token = token;
  
      // return new user
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
  };


const loginUser = async (req, res, next) =>{
    try {
      // Get user input
      const { email, password } = req.body;
  
      // Validate user input
      if (!(email && password)) {
        res.status(400).send("All input is required");
      }
      // Validate if user exist in our database
      const user = await User.findOne({ email });
  
      if (user && (await bcrypt.compare(password, user.password))) {
        // Create token
        const token = jwt.sign(
          { user_id: user._id, email },
          "" + process.env.JWT_KEY,
          {
            expiresIn: "2h",
          }
        );
  
        // save user token
        user.token = token;
  
        // user
        res.status(200).json(user);
      }
      res.status(400).send("Invalid Credentials");
    } catch (err) {
      console.log(err);
    }
  };
  
  app.get("/welcome", auth, (req, res) => {
    res.status(200).send("Welcome 🙌 ");
  });
  
  // This should be the last route else any after it won't work
  app.use("*", (req, res) => {
    res.status(404).json({
      success: "false",
      message: "Page not found",
      error: {
        statusCode: 404,
        message: "You reached a route that is not defined on this server",
      },
    });


  });
  var blacklist = require('express-jwt-blacklist');
  const logoutUser = async (req, res, next) =>{
    const token=(req.body.token || req.query.token || req.headers["token"] || req.headers["x-acess-token"] || req.headers["authorization"]);
  
    try {
            decoded = jwt.verify(token, "" + process.env.JWT_KEY);
        } catch (e) {
            return res.status(401).send('unauthorized');
        }
        var userEmail = decoded.email;
        const user = User.findOne({ userEmail });
    
    await user.token;
    //await user.addBlackListToken(token)
    //console.log(user.token)
    res.send({msg : 'You have been Logged Out' });
  };


module.exports = { addUsers, loginUser,logoutUser };


