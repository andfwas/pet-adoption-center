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

// app.use(function (req, res) {
//   res.setHeader('Access-Control-Allow-Headers', {
//     "Content-Type": "application/json",
//     "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ2MjhlNDg5YWU5YjkzYmFkOWZmODI3MjZmMGJjYzFmZWI5N2Q2Y2I5NjFjMTVlYTU2Y2I3MDc0OGI0NzVkY2EwOWFhNDgzNGQ1NGFkNDE3In0.eyJhdWQiOiJVamhDTUhvdmtVTkJkMUUzN0VMc0ZDakFDVjRjSUZyemIzZlNWUTI5Q3BEZ1dST1c0NyIsImp0aSI6IjQ2MjhlNDg5YWU5YjkzYmFkOWZmODI3MjZmMGJjYzFmZWI5N2Q2Y2I5NjFjMTVlYTU2Y2I3MDc0OGI0NzVkY2EwOWFhNDgzNGQ1NGFkNDE3IiwiaWF0IjoxNTc3NjU2ODQ0LCJuYmYiOjE1Nzc2NTY4NDQsImV4cCI6MTU3NzY2MDQ0NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.ibU4JyxhIUGvvFAE-4SQBgFFztdABpWoHMTHblvnNLWlBqEYZjR9omyvj5-lse9MG50Hu_guRX2Drvi9Xw4N_mVbot9eNZHWriV063OVORIyYi8rpCWrVutRowIT4ho1ermCAvKq4WSHyw8iV6yqVlsTvSi5rPdN-hh20gwJAYpcujiy-lXW_m1_M2_ttzBNdY_J5uhZjv5BAoabEh5WELC-NmIMKRw8HiVzsePXJ00uHvNrp7O5ewsSgG-rWutiSc7MMStQGL27UduM981yeEHB8pNwHkxfLbIm-UVGFyS3Jolij4nSVFkdVMSr5YLW3QAABuuNKGv1rnk0GVvCNg",
//     "X-Amz-Date": "",
//     "X-Api-Key": "",
//     "X-Amz-Security-Token": "",
//     "X-Api-Sdk": "" 
//   })
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
//   console.log(res)
// })

app.get('/', function (req, res) {
 res.render(index)
})

let port = 3000
app.listen(port, (req, res) => {
  console.log('app listening on port: ' + port)
})