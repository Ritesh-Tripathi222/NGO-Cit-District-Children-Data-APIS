const State = require("../models/State");
const District  =  require("../models/District")
const Child = require("../models/Child")
const { v4: uuidv4 } = require('uuid');


//GET ALL STATE
const getState = (req, res) => {
  State.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
};

//GET STATE BY ID
const getStateById = (req, res) => {
    const ik =(req.params.id);
    State.find({id:ik})
      .then((data) => res.json(data))
      .catch((err) => res.status(400).json("Error: " + err));
  };
  
//ADD STATE
const addState = (req, res) => {
  var id = uuidv4()
  const {  state } = req.body;
  const newState = new State({ id, state });

  newState
    .save()
    .then(() => res.json("State Addition  Successfull"))
    .catch((err) => res.status(400).json("Error: " + err));
};

// GET DISDRICT
const getDistrict = (req, res) => {
  District.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
};

//ADD DISTRICT
const addDistrict = (req, res) => {
  var id = uuidv4()
  const {  state , district } = req.body;
  const newDistrict = new District({ id, state , district });

  newDistrict
    .save()
    .then(() => res.json("District Addition Successfull"))
    .catch((err) => res.status(400).json("Error: " + err));
};

// GET CHILD DATA
const getChild = (req, res) => {
  Child.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
};

const addChild = (req, res) => {
  var id = uuidv4()
  const {  name , sex  , dob, fatherName , motherName , state , district} = req.body;
  const newChild = new Child({ id, name , sex  , dob, fatherName , motherName , state , district});

  newChild
    .save()
    .then(() => res.json("Child Addition  Successfull"))
    .catch((err) => res.status(400).json("Error: " + err));
};


module.exports = { getState, addState ,getDistrict, addDistrict , getChild , addChild,getStateById};