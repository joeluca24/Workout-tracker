const db = require("../models");
const router = require("express").Router();
const path = require("path");



module.exports = (app) => {

    app.get("/api/workouts",(req,res)=>{
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err =>{
            res.status(401).json(err);
        })
        // /
router.get("/exercise", (req, res) => {
res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

module.exports = router;
    })
};



















