const mongoose = require('mongoose');

const Schema = mongoose.Schema
const Patients=new Schema({uniqueid:{type:String,default:''},

age:{type:Number,default:20},
name:{type:String,default:''},
address:{type:String,default:''},
bp:{type:String,default:0},
pulse:{type:Number,default:0},
prakruti:{type:String,default:''}
})
module.exports=mongoose.model("patients",Patients);    