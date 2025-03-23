const express  = require ('express')
const router = express.Router()
const user = require('../models/User')
// const { body } = require('express-validator')
const { body, validationResult } = require('express-validator');

router.post("/createuser", 
    body('email', 'Kindly enter the correct email id').isEmail(),
    body('password','Incorrect password awantika ji' ).isLength({min: 5}),
    body('name').isLength({min: 5})
    ,async (req, res)=>{



        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }
    try{
        console.log("ashi bashi 1")

        await user.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            location: req.body.location

        })
        console.log("ashi bashi 2")

        // res.json({success: true});
        return res.send({success: true})
        // console.log("ashi bashi 2")

    } catch (error){
        console.log("ashi bashi error")
        console.log(error)

        return res.send({error:true, errorMsg: 'Unexpected error occurred, please try again'})

        // console.log({success: false})

    }
})

module.exports = router;