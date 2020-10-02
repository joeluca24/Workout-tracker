const express = require("express");
const PORT = process.env.PORT || 3000
const app = express()

require("./routes/html-routes")(app)
require("./routes/api-routes")(app)

app.listen(PORT,function(){
    console.log("listening at http://localhost:"+PORT)
})










