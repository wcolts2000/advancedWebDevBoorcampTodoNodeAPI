var express = require('express'),
    app = express();
    port = process.env.PORT || 3000;


app.get('/', function(req, res){
    res.send("HI THERE FROM EXPRESS")
});



app.listen(port, function() {
    console.log("APP IS RUNNING ON PORT " + process.env.PORT || "LOCALHOST:3000");
    
})