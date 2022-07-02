import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

const router = express.Router();

//CREATE 
router.post("/", async (req, res) => {

    const newHotel = new Hotel(req.body)
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    }catch(err){
        res.status(500).json(err)
    }
})
//UPDATE
router.put("/:id", async (req, res) => {

    try {
        const updateHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true});
        res.status(200).json(updateHotel);
    }catch(err){
        res.status(500).json(err)
    }
})
//DELETE
router.delete("/:id", async (req, res) => {

    try {
         await Hotel.findByIdAndDelete(
            req.params.id);
        res.status(200).json("Hotel has been deleted");
    }catch(err){
        res.status(500).json(err)
    }
})
//GET
router.get("/:id", async (req, res) => {

    try {
        const getHotel = await Hotel.find(
            req.params.id);
        res.status(200).json(getHotel);
    }catch(err){
        res.status(500).json(err)
    }
})
//GET ALL
router.get("/", async (req, res,next) => {

    try {
        const getAllHotels = await Hotel.find();
        res.status(200).json(getAllHotels);
    }catch(err){
        next(err);
    }
})

export default router