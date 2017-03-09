var express = require('express')
var morgan = require('morgan')
var app = express()

app.use(morgan('tiny'))

app.get('/', function(req, res) {
  res.send('Hello world')
})

app.listen(3000, function() {
  console.log('Example started on port 3000')
})
