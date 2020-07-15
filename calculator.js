const express = require('express');
const bodyPerser = require('body-parser');

const app = express();
app.use(bodyPerser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post('/', function (req, res) {
    var num1 = parseInt(req.body.num1) ;   // parseInt or use Number 
    var num2 = parseInt(req.body.num2);    // parseInt or use Number
    var sum = num1+num2;

    res.send('Sum of '+num1 + ' and ' +num2 + ' is = ' + sum);
})

app.listen(3000, function () {
    console.log("satrted 3000 port");
})
