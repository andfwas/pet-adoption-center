const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const options = {
  index: 'index.html'
}

app.use(express.static('./', options))

app.get('/', function (req, res) {
 res.render(index)
})

let port = 3000
app.listen(port, (req, res) => {
  console.log('app listening on port: ' + port)
})