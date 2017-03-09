var express = require('express')
var path = require('path')
var app = express()

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
  res.render('home', {
    title: 'Home',
    name: 'Jamie',
    users: [
      {name: 'Felicity'},
      {name: 'Sophie'},
      {name: 'Jamie'},
      {name: 'Misty'}
    ]
  })
})

app.listen(3000, function() {
  console.log('Example started on port 3000')
})
