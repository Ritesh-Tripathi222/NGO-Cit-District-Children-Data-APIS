const mongoose =  require("mongoose")
const Schema = mongoose.Schema;

const StateSchema = new Schema({
    id:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    }

}, { versionKey: false })

module.exports = mongoose.model("State",StateSchema)