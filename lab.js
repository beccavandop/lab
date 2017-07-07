var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;
 
app.get('/', function (req, res) {
  res.send('Hello Caio, how are you today??'+ '<br><img src="https://s-media-cache-ak0.pinimg.com/736x/9a/bc/f4/9abcf4c1ec6c14a000f0ffa66c072b38--funny-grumpy-cats-grumpy-cat-quotes.jpg" alt="Smiley face">');
})

app.get('/name', function (req, res) {
  res.send('Becca');
})

app.get('/sum', function (req, res) {
  let sum = parseInt(req.query.a) + parseInt(req.query.b) + parseInt(req.query.c);
  res.send(sum.toString())
})

app.get('/color', function (req, res) {
  res.json({
      red: 0,
      green: 66,
      blue: 45

  })
})
 
app.listen(PORT, () => {
    console.log("hello")
});