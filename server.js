import express from "express";
import { router as dogsController } from './controllers/dogs-controller.js'
import { router as catsController } from './controllers/cats-controller.js'

const app = express()

app.use(express.json())

app.use('/', dogsController)
app.use('/', catsController)

app.listen(5000, () => {
    console.log("Server is listening on port 5000")
})
