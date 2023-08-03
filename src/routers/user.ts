
import express, { Application, Request, Response } from 'express'
import { userController } from '../controllers';

const router = express.Router();
let userRoutes = (app: Application) => {
    app.get('/users', (req, res) => userController.getResultAllUsers(req, res))
    app.post("/create-new-user", (req, res) => userController.createNewUser(req, res))
    app.post("/delete-user", (req, res) => userController.deleteUser(req, res))
    app.get("/edit-user/:id", (req, res) => userController.getEditPage(req, res))
    app.post("/update-user", (req, res) => userController.updateUser(req, res))
    return app.use('/users', router)
}

export {
    userRoutes
}
