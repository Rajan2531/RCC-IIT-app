const express= require("express");
const router=express.Router();
const facultyController = require("./../controllers/facultyController.js");
router.route('/:stream').post(facultyController.getAllFacultyOfStream);
router.route('/update/:id').patch(facultyController.updateFaculty);
router.route('/delete/:id').delete(facultyController.deleteFaculty);

module.exports=router;