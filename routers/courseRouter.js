const express=require("express");
const router=express.Router();
const authController=require('./../controllers/authController.js');
const courseController=require("./../controllers/courseController.js");
router.route('/').get(courseController.getAllcourses).post(courseController.createCourses);

module.exports=router;