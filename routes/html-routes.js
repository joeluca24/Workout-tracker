module.exports = (app) => {
    app.get("/",( req , res ) =>{
        res.send("This is inside html-routes")
    
    });

};