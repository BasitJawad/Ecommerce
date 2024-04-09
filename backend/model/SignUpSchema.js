const mongoose = require('mongoose');
const validator = require('validator');

const SignUpSchema = new mongoose.Schema({
    name :{
        type: 'string',
        minlength:[3,"name must be 3 characters long"],
        maxlength:20,
        trim:true,
        required: true
    },
    email:{
        type: 'string',
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                console.log("Email is not valid")
            }
        }
    },
    password:{
        type:String,
        required:true,
        
    },
    token: {
        type: String // Add token attribute
    }
})

const SignUp = mongoose.model('SignUp',SignUpSchema)
module.exports = SignUp

    