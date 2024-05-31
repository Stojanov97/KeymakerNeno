const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    admin:{
        type:Boolean,
        required:true,
    }
}, {timestamps:true});

const User = mongoose.model("User", UserSchema, "users");

const create = async (data) => {
    try{
        const newUser = new User(data);
        return await newUser.save();
    }catch(err){
        throw new Error(err);
    }
}

const getByEmail = async (email) => {
    try{
        return await User.findOne({email:email});
    }catch(err){
        throw new Error(err);
    }
}


module.exports={
    create,
    getByEmail,
}