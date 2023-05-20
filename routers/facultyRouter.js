const express= require("express");
const router=express.Router();
const facultyController = require("./../controllers/facultyController.js");
router.route('/:stream').post(facultyController.getAllFacultyOfStream);


module.exports=router;