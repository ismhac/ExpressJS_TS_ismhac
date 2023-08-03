import * as express from "express"
import { Application, Request, Response } from 'express';

const router = express.Router()

let initWebRoutes = (app: Application) => {

    app.get('/', (req: Request, res: Response) => {
        res.render("home.ejs")
    })
    return app.use('/', router)
}

export {
    initWebRoutes
}