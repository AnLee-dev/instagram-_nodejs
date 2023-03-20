const express = require('express')
const app = express()
const port = 3000

//router
app.get('/hihii', (req, res) => {
    
var a = 2;
var b = 5;
var c = a + b;
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})