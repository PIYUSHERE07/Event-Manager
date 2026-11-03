const {check,validationResult} =require('express-validator');
const Councils = require('../models/councilSchema')

exports.adminGet = (req,res,next)=>{
    res.send("Hello...")
}

exports.adminPost =[

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

        check('conformPassword')
        .trim()
        .custom((value,{req})=>{
            if(value!=req.body.councilPassword){
                throw new Error("password does not match!");
            }
            return true;
        }),

        check("councilName")
        .notEmpty()
        .withMessage("Council Name is required.")
        .trim()
        .matches(/^[a-zA-Z ]+$/)
        .withMessage("Council should contail only alphabets"),

        check("councilCategory")
        .notEmpty()
        .withMessage("Council Category is required.")
        .trim()
        .matches(/^[a-zA-Z]+$/)
        .withMessage("Council should contail only alphabets"),

    async (req,res,next)=>{
        const {councilEmail,councilPassword,councilName,councilCategory} = req.body;
        const error = validationResult(req);

        if(!error.isEmpty()){
            return res.status(400).json({
                success: false,
                errors: error.array(),
                oldInput: req.body
            })
        }
        else{
            const newClub = new Councils({councilEmail,councilPassword,councilName,councilCategory});
            await newClub.save().then(club=>{
                console.log(club._id);
                res.status(200).json({
                    success: true,
                    errors:[]
                })
            });
        }
    }
]