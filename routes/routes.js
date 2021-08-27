const express = require("express");
const router = express.Router();
var app = express;
const {getState,addState ,getDistrict ,addDistrict, getChild , addChild,getStateById} = require("../controller/main-api");
//const { addUsers, loginUser } = require("../controller/userController");

// http://localhost:5000/api/register
//router.post("/register", addUsers);
// http://localhost:5000/api/login
//router.post("/login", loginUser);

router.get("/getstate",getState)
router.get("/getstate/:id",getStateById)

// http://localhost:5000/api/addstate
router.post("/addstate", addState);

router.get("/getdistrict",getDistrict)

// http://localhost:5000/api/adddistrict
router.post("/adddistrict", addDistrict);

router.get("/getchild",getChild)

// http://localhost:5000/api/addchild
router.post("/addchild", addChild);


module.exports = router;