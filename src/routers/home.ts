import express, { Application, Request, Response } from 'express';
const router = express.Router();

let initWebRoutes = (app: Application) => {

    app.get('/', (req: Request, res: Response) => {
        res.send('Welcome to !!!')
    })
    return app.use('/', router)
}

export {
    initWebRoutes
}