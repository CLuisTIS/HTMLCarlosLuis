const express = require('express')
const app = express()
 
app.use(express.static('./public'))


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/:nome',(req, res) => {
    res.json('Hello ' + req.params.nome)
  })

  //FUNCTION FOI SUBSTITUIDO POR =>
//app.get('/',(req, res) => {
//    res.send('Hello World')
//})

const port = 3000


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})