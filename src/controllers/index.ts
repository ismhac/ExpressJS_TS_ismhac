// export * from './userController'
import { NoteController } from "./crud/noteController";
import { UserController } from "./crud/userController";
import { CrudController } from "./crudController";

const userController = new UserController();
const noteController = new NoteController();

export {
    CrudController,
    userController,
    noteController
}