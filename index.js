const express = require('express')
const { dirname } = require('path/posix')
const app = express()
const path = require('path')
 
app.use(express.static('./public'))


app.get('/', function (req, res) {
  res.send('Hello World')
})

 //FUNCTION FOI SUBSTITUIDO POR =>
//app.get('/',(req, res) => {
//    res.send('Hello World')
//})

app.get('/:nome',(req, res) => {
    res.json('Hello ' + req.params.nome)
  })

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'./public/index.html'))
})

const port = 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})