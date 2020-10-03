const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({

    type: {
        type: String,
        trim: true,
        required: "Enter an Exercise Type"
    },
    name: {
        type: String,
        trim: true,
        required: "Enter an Exercise Name"
    },
    duration: {
        type: Number,
        required: "Enter Exercise Duration in Minutes"
    },
    weight: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    sets: {
        type: Number,
    },
    distance: {
        type: Number,
    }

});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;