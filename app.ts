import express =  require("express")
import bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.json({
    limit: "50mb",
}))

app.get('/', (req, res) => {
    res.send("Meow!!!!!")
})

app.get('/:id/:meow', (req, res) => {
    res.send(req.params)
})

app.post('/', (req, res) => {
    res.send(req.body)
})

app.get('/health-check', (req, res) => {
    res.send({
        Status: "Online"
    })
})

export { app }