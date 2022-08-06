const express = require('express');
const app = express();

app.set("view engine", "jade");
app.get('/', function (req, res){
    res.render('number')
}

var giveMePizza = function(){
    return new Promise(function(resolve,any){
    if(everythingWorks){
    resolve("This is true"); // then() will be called
    } else {
    reject("This is false"); // catch() will be called
    }
    })
    }
    giveMePizza()
    .then(data => console.log(data))
    .catch(err => console.error(err));
    console.log('I will run immediately after calling giveMePizza() and before any result arrives');
    