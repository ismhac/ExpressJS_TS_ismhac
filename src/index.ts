import express from 'express'
import { userRoutes, initWebRoutes } from './routers'
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const port = process.env.PORT || 8081

initWebRoutes(app)
userRoutes(app);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})