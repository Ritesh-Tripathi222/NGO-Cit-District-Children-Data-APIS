const express = require("express");
const router = express.Router();
const {getState,addState ,getDistrict ,addDistrict, getChild , addChild,getStateById, getChildByState} = require("../controller/main-api");
const { addUsers, loginUser,logoutUser } = require("../controller/user");
const auth = require("../middleware/auth");


// To register user => http://localhost:5000/api/register
router.post("/register", addUsers);
//  To Login => http://localhost:5000/api/login
router.post("/login", loginUser);

router.post("/logout", auth,logoutUser);

//To get State
router.get("/getstate",auth,getState)

//To get state by Id
router.get("/getstate/:id",auth,getStateById)

// To add state => http://localhost:5000/api/addstate
router.post("/addstate",auth, addState);

router.get("/getdistrict",auth,getDistrict)

// To add district => http://localhost:5000/api/adddistrict
router.post("/adddistrict", auth,addDistrict);

router.get("/getchild",auth,getChild)

//get child according to state
router.get("/getchild/:state",auth,getChildByState)

//To add child =>  http://localhost:5000/api/addchild
router.post("/addchild",auth, addChild);


module.exports = router;