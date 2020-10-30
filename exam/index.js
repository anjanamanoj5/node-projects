var express = require('express');
var app = express();
app.set('view engine', 'ejs');
var port = 3000;
app.get("/", function(req, res){
    res.render("home");
});

app.listen(port, function(){
     console.log("server is running on port" + port);
});
