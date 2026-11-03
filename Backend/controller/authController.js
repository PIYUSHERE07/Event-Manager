const {check,validationResult} = require('express-validator')
const Councils = require('../models/councilSchema')

exports.logoutPost =async (req,res,next)=>{
    await req.session.destroy((error)=>{
        if(error) {
            return res.status(500).json({
                success: false,
                message: "logout failed"
            })
        }

        res.clearCookie("connect.sid");//help to clear/delete cookies

        return res.status(200).json({
            success: true,
            message: "logout Successfully"
        })
    })
}

exports.loginPost =[

    check("councilEmail")
    .notEmpty()
    .withMessage("Email is required.")
    .trim()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    .withMessage("follow the format of email"),

    check('councilPassword')
    .trim()
    .notEmpty()
    .withMessage("Password is required")
    .isLength({min:8})
    .withMessage("password should contail minimum 8 characters.")
    .matches(/^[a-zA-Z0-9@#$]+$/)
    .withMessage("only alphabets,numbers,@,# and $ allowed"),

    async (req,res,next)=>{
        const {councilEmail,councilPassword} = req.body
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({
                success : false,
                oldInputs: req.body,
                errors:errors.array()
            })
        }

        Councils.findOne({councilEmail : councilEmail}).then((council)=>{
            if(council && councilPassword === council.councilPassword){
                req.session.councilCategory = council.councilCategory;
                req.session.councilId = council._id.toString();
                return res.status(200).json({
                    success : true,
                    council : req.body,
                    errors : []
                })
            }
            return res.status(400).json({
                success : false,
                errors : ["Incorrect email and password"]
            })
        })
        .catch((error)=>{
            console.log(error);
            return res.status(500).json({
                success : false,
                errors : ["Internal server error!"]
            })
        })
    }
] 