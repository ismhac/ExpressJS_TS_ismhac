import express, { Application, Request, Response } from 'express'
import { userController } from '../controllers';

const router = express.Router();
let userRoutes = (app: Application) => {
    app.get('/users', (req, res) => userController.getResultAllUsers(req, res));
    return app.use('/users', router)
}

export {
    userRoutes
}
