const Activity = require('../models/activitySchema')
const Councils = require('../models/councilSchema')

exports.clubGet = ()=>{
    res.send("Hello...")
}

exports.addActivityPost =async (req,res,next)=>{
    const {activityName,startDate,startTime,endDate,endTime,activityDescription,activityLink} = req.body;
    const event = new Activity({activityName,startDate,startTime,endDate,endTime,activityDescription,activityLink});
    const councilId = req.session.councilId;
    await event.save().then( async (event)=>{
        await Councils.findById(councilId)
        .then(async (council)=>{
            if(council){
                await council.councilActivity.push(event._id.toString());
                await council.save();
                return res.status(200).json({
                    success : true,
                    message : ["event added successfully"],
                    event : req.body
                })
            }
            else{
                return res.status(400).json({
                    success : false,
                    message : ["council does not found"]
                })
            }
        })
        .catch((error)=>{
            return res.status(500).json({
            success : false,
            message : ["internal server error"]
        })
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

exports.getMyActivities = async (req,res,next)=>{
    const councilId = req.session.councilId;
    let Activities = [];
    if(councilId){
        Councils.findById(councilId)
        .then(async (council)=>{
            Activities = await Promise.all( council.councilActivity.map(async activityId => {
                    return await Activity.findById(activityId);
                })
            );
            return res.status(200).json({
                success : true,
                Activities
            })
        })
    }
    else{
        return res.status(400).json({
            success:false
        })
    }
}