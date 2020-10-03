const express = require("express");
const PORT = process.env.PORT || 3000
const app = express()
const logger = require("morgan");
const mongoose = require("mongoose");
const db = require("./models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


// define your middleware here
app.use(express.static("public"))
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// define routes
require("./routes/html-routes")(app)
require("./routes/api-routes")(app)

app.listen(PORT, function () {
    console.log("listening at http://localhost:" + PORT)
})










