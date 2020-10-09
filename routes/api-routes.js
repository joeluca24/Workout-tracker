const db = require("../models");
const router = require("express").Router();
const path = require("path");
const mongoose = require("mongoose");


module.exports = (app) => {

    app.get("/api/workouts",(req,res)=>{
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err =>{
            res.status(401).json(err);
        })

    });

    app.post("/api/workouts", (req,res)=>{
        db.Workout.create(req.body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err =>{
            res.status(401).json(err);
        });
    });

    app.put("/api/workouts/:id", (req, res)=>{
        console.log(req.body);
        db.Workout.update({_id: new mongoose.Types.ObjectId(req.params.id)}, 
        {$push :{exercises: req.body}})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err =>{
            res.status(401).json(err);
        });
        
    });
};



















