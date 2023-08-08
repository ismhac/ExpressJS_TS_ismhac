import { NoteService } from './crud/noteService';
import { UserService } from './crud/userService';
import { CrudService, ICrudExecOption } from './crudService';
import { ErrorService } from './errorService';

// SECTION
const errorService = new ErrorService();

// CRUD
const userService = new UserService();
const noteService = new NoteService();

export {
    CrudService,
    ICrudExecOption,
    errorService,
    userService,
    noteService
}