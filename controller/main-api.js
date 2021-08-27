const State = require("../models/State");
const District  =  require("../models/District")
const Child = require("../models/Child")
const { v4: uuidv4 } = require('uuid');


// state
const getState = (req, res) => {
  State.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
};

const getStateById = (req, res) => {
    const ik =(req.params.id);
    State.find({id:ik})
      .then((data) => res.json(data))
      .catch((err) => res.status(400).json("Error: " + err));
  };
  

const addState = (req, res) => {
  var id = uuidv4()
  const {  state } = req.body;
  const newState = new State({ id, state });

  newState
    .save()
    .then(() => res.json("State Added Successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
};

// District
const getDistrict = (req, res) => {
  District.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
};

const addDistrict = (req, res) => {
  var id = uuidv4()
  const {  state , district } = req.body;
  const newDistrict = new District({ id, state , district });

  newDistrict
    .save()
    .then(() => res.json("District Added Successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
};

// Child
const getChild = (req, res) => {
  Child.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
};

const addChild = (req, res) => {
  var id = uuidv4()
  const {  name , sex  , dob, fatherName , motherName , state , district,stateid ,districtid  } = req.body;
  const newChild = new Child({ id, name , sex  , dob, fatherName , motherName , state , district,stateid ,districtid });

  newChild
    .save()
    .then(() => res.json("Child Added Successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
};


module.exports = { getState, addState ,getDistrict, addDistrict , getChild , addChild,getStateById};