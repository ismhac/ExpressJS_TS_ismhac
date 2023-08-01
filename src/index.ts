import express from 'express'
import { userRoutes, initWebRoutes } from './routers'
import { configViewEngine } from './config'
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const port = process.env.PORT || 8081

configViewEngine(app)

initWebRoutes(app)
userRoutes(app);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})