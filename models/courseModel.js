 const mongoose= require('mongoose');

const courseSchema=new mongoose.Schema({
  courseName:{
    type:String,
    required:true
  },
  stream:{
type:String,
required:[true, "A stream must be there"]
},
branch:{
type:String,
required:[true, "A branch must be filled"]
},
duration:{
type:Number,
required:[true, "Duration must be there"]
},
intake:{
type:Number,
required:[true, "Intake must be there"]
}
})

const Course=mongoose.model('Course',courseSchema);

module.exports=Course;
