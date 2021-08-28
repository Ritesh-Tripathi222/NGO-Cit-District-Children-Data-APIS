const mongoose =  require("mongoose")
const Schema = mongoose.Schema;

const RegisterSchema = new Schema({
    id:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }

}, { versionKey: false })

module.exports = mongoose.model("Register",RegisterSchema)