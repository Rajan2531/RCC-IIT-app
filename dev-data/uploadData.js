const mongoose=require("mongoose");
const fs=require("fs")
const express=require("express");
const app=require("./../app.js")
const dotenv=require("dotenv");
const Course=require("./../models/courseModel.js");
const Faculty=require("./../models/facultyModel.js");
dotenv.config({path: "./../config.env"});
const dbUrl=process.env.DATABASE_URL.replace("<PASSWORD>",process.env.DATABASE_PASSWORD);
mongoose.connect(dbUrl,{useNewUrlParser:true}).then(()=>{
    console.log("database connected successfully")
}).catch(err=>{
    console.log(err);
})

const facultyData=JSON.parse(fs.readFileSync("./facultyData.json","utf-8"));
const courseData=JSON.parse(fs.readFileSync("./courseData.json","utf-8"));
const uploadFacultyData=async()=>{
  try{
    const facultys=await Faculty.create(facultyData);
    console.log("data uploaded successfully");
  }
  catch(err)
  {
    console.log(err);
  }
}

const uploadCourseData=async()=>{
  try{
    const courses=await  Course.create(courseData);
    console.log("data uploaded successfully");
  }
  catch(err)
  {
    console.log(err);
  }
}
console.log(process.argv);
if(process.argv[2]==="--import faculty")
uploadFacultyData();
if(process.argv[2]=="--import courses")
uploadCourseData();
