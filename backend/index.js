const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./src/routes/routes')
const app = express()

app.listen(3003, () => {
    console.log("conectado")
})

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json());

app.use(cors({
    origin: '*'
}));

app.use(routes)
