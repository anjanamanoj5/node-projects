var express =require('express');
 var todoController = require('./controllers/todoController');

var app=express();

app.set('view engine','ejs');


app.use(express.static('./public'));

todoController(app);

app.listen(8000);
console.log('you r listening port 3000');