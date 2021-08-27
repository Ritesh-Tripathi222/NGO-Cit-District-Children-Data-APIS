const mongoose =  require("mongoose")
const Schema = mongoose.Schema;

const DistrictSchema = new Schema({
    id:{
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
    }

}, { versionKey: false })

module.exports = mongoose.model("District",DistrictSchema)