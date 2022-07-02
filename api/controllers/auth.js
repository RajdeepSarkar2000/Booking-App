import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import { createError } from "../utils/error.js";

export const register = async (req,res,next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password);


        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        });

        await newUser.save();
        res.status(200).send("User has been created")
    }catch(err){
        next(err)
    }
}

export const login = (req,res,next) => {
    try{
        const user = User.findOne({username: req.body.username});
        if(!user) return next(createError(404,"User not found"))
    }catch(err){
        next(err);
    }
}