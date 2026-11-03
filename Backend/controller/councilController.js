const Activity = require('../models/activitySchema')
const Councils = require('../models/councilSchema')

exports.clubGet = ()=>{
    res.send("Hello...")
}

exports.addActivityPost = (req,res,next)=>{
    const {activityName,startDate,startTime,endDate,endTime,activityDescription,activityLink} = req.body;
    const event = new Activity({activityName,startDate,startTime,endDate,endTime,activityDescription,activityLink});

    const councilId = req.session.councilId;
    event.save().then((event)=>{

        Councils.findById(councilId)
        .then(async (council)=>{
            if(council){
                council.councilActivity.push(event._id.toString());
                await council.save();
            }
            else{
                return res.status(400).json({
                    success : false,
                    message : ["council does not found"]
                })
            }
        })

        return res.status(200).json({
            success : true,
            message : ["event added successfully"],
            event : req.body
        })
    })
    .catch((error)=>{
        return res.status(500).json({
            success : false,
            message : ["internal server error"]
        })
    })
}  

exports.deleteActivity = async (req,res,next)=>{
    const activityId = req.params.activityId;

    const councilId = req.session.councilId;

    const updatedActivities =await Activity.findByIdAndDelete(activityId);

    if(!updatedActivities){
        return res.status(404).json({
            success:false,
            message:["activity does not found"]
        })
    }

    await Councils.findByIdAndUpdate(councilId,{
        $pull:{
            councilActivity : updatedActivities._id
        }
    }).then(()=>{
        res.status(200).json({
            success : true,
            message :["event delete successfully"]
        })
    })
    .catch(()=>{
        return res.status(500).json({
            success : false,
            message : ["internal server error"]
        })
    })
}

exports.updateActivity = async (req,res,next)=>{
    const {activityName,startDate,startTime,endDate,endTime,activityDescription,activityLink} = req.body;
    const activityId = req.params.activityId;

    const updatedActivity = await Activity.findByIdAndUpdate(activityId,{
        activityName,
        startDate,
        startTime,
        endDate,
        endTime,
        activityDescription,
        activityLink
    },
    {
        new:true,
        runValidators:true
    })

    if(!updatedActivity){
        return res.status(400).json({
            success:false,
            message: ["activity does not delete!"]
        })
    }

    return res.status(200).json({
        success: true,
        message:["activity deleted successfully."]
    })
}