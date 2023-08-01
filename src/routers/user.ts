import express, { Application, Request, Response } from 'express'
import { getFormRegister, getAllUsers, createNewUser, getFormUpdateUser } from '../controllers';

const router = express.Router();
let userRoutes = (app: Application) => {
    app.get('/users', getAllUsers);
    app.get('/create-new-user', getFormRegister)
    app.get('/update-user', getFormUpdateUser)
    app.post('/create-new-user', createNewUser)
    return app.use('/users', router)
}

export {
    userRoutes
}