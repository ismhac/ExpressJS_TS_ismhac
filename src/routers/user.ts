import express, { Application, Request, Response } from 'express';

const router = express.Router();
let userRoutes = (app: Application) => {
    app.get('/users', (req: Request, res: Response) => {
        res.send('Hallo :))')
    })
    return app.use('/', router)
}

export {
    userRoutes
}