import { Users } from "../models"
import { Request, Response } from "express";
import { UserService } from '../services/crud/userService'

const userService = new UserService();
let getAllUsers = async (req: Request, res: Response) => {
    let result = await userService.getAllUsers(req, res);
    console.log(result);
}

let getFormRegister = async (req: Request, res: Response) => {
    return res.render('createNewUser.ejs')
}

let createNewUser = async (req: Request, res: Response) => {
    let { first_name, last_name } = req.body
    console.log(">>> check data: ", req.body)
    try {
        const newUser = await Users.create({ first_name, last_name })
        // res.status(201).json(newUser)
    } catch (error) {
        console.error(error);
        // res.status(500).json({ message: 'An error occurred while creating the user' });
    }
    return res.redirect('/users')
}

let getFormUpdateUser = async (req: Request, res: Response) => {
    return res.render('updateUser.ejs')
}

export {
    getAllUsers,
    getFormRegister,
    createNewUser,
    getFormUpdateUser
}