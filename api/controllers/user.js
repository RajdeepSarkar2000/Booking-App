import User from "../models/User.js";

export const createUser = async (req,res,next)=> {
    const newUser = new User(req.body)
    try {
        const savedUser = await newHotel.save();
        res.status(200).json(savedUser);
    }catch(err){
       next(err)
    }
}

export const updateUser = async (req,res,next)=> {
    try {
        const updateUser = await User.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true});
        res.status(200).json(updateUser);
    }catch(err){
        next(err);
    }
}
export const deleteUser = async (req,res,next)=> {
    try {
        await User.findByIdAndDelete(
           req.params.id);
       res.status(200).json("User has been deleted");
   }catch(err){
      next(err)
   }
}
export const getUser = async (req,res,next)=> {
    try {
        const getUser = await User.find(
            req.params.id);
        res.status(200).json(getUser);
    }catch(err){
       next(err)
    }
}
export const getUsers = async (req,res,next)=> {
    try {
        const getAllUsers = await User.find();
        res.status(200).json(getAllUsers);
    }catch(err){
        next(err);
    }
}