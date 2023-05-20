const Faculty= require("./../models/facultyModel.js");
const catchAsync= require("./../utils/catchAsync.js")
const appError = require("./../utils/appError.js");
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