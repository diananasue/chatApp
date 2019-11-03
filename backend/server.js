const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

let messages = []

app.get('/message', (req, res) => {
    console.log('get')

    res.send(messages)
})

app.post('/message', (req, res) => {
    console.log('put')
    console.log(req.body)
    messages.push(req.body)
    console.log(messages)
    res.sendStatus(200)
})

let server = app.listen(5000, () => {
    console.log('the server is listening on: ', server.address().port)
})