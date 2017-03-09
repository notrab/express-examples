var express = require('express')
var path = require('path')
var app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public', 'css')))

app.get('/', function(req, res) {
  res.send('Hello world')
})

app.listen(3000, function() {
  console.log('Example started on port 3000')
})
