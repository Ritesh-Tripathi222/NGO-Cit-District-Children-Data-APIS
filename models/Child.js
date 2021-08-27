const mongoose =  require("mongoose")
const Schema = mongoose.Schema;

const ChildSchema = new Schema({
    id:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    sex:{
        type:String,
        require:true
    },
    dob:{
        type:String,
        require:true
    },
    fatherName:{
        type:String,
        require:true
    },
    motherName:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    },
    district:{
        type:String,
        require:true
    },
    stateid:{
        type:String,
        require:true
    },
    districtid:{
        type:String,
        require:true
    },
}, { versionKey: false })

module.exports = mongoose.model("Child",ChildSchema)