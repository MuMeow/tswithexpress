import express =  require("express")
// import bodyParser = require("body-parser")
import { CatController } from './services/cat/controller/controller'

const app = express();

// app.use(bodyParser.json({
//     limit: "25mb",
// }))

app.use('/cat',CatController)

app.get('/health-check',(req,res) => {
    res.send({
        Status:"Online"
    })
})

export { app }