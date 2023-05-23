const Faculty= require("./../models/facultyModel.js");
const catchAsync= require("./../utils/catchAsync.js")
const appError = require("./../utils/appError.js");
const app = require("../app.js");
exports.getAllFacultyOfStream= catchAsync.catch(async(req,res,next)=>{
    const stream = req.params.stream;
    const facultyData = await Faculty.find({stream:stream});
    if(!facultyData)
    {
        return next(new appError("could not get faculty data with given stream",400));
    }

    res.status(200).json({
        status:"success",
        data:facultyData
    })
})


exports.updateFaculty=catchAsync.catch(async(req,res,next)=>{

    const facultyId=req.params.id;
    const dataToUpdate=req.body;
    const updatedFaculty= await Faculty.findByIdAndUpdate({_id:facultyId},dataToUpdate,{new:true})
    if(!updatedFaculty)
    {
        return next(new appError("could not update data",404));
    }
    res.status(200).json({
        status:"success",
        data:updatedFaculty,
    })
})

exports.deleteFaculty=catchAsync.catch(async(req,res,next)=>{
    const facultyId=req.params.id;
    const deletedFaculty= await Faculty.findByIdAndDelete({_id:facultyId})
    res.status(200).json({
        status:"success",
        data:deletedFaculty
    })
})
