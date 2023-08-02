// export * from './userController'
import { UserController } from "./crud/userController";
import { CrudController } from "./crudController";

const userController = new UserController();

export {
    CrudController,
    userController
}