const db = require("../models");
module.exports = (app) => {
    app.get("/api/workouts",(req,res)=>{
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err =>{
            res.status(401).json(err);
        })
    })
};



















