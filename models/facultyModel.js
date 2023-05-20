const mongoose=require("mongoose")

const facultySchema= new mongoose.Schema({
  stream:{
    type:String,
    required:true
  },
  name:{
    type:String,
    required:true
  },
  degree:{
    type:String,
    required:true
  },
  dob:{
    type:String,
    required:true
  },
  designation:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  image:{
    type:String,

  }

})

const Faculty=mongoose.model("Faculty",facultySchema);

module.exports=Faculty;
