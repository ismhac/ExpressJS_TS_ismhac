
import {
    Users,
    Notes
} from './tables'

console.log('Loading Associate Model.....');
Notes.belongsTo(Users, {
    foreignKey: 'user_id',
    as: 'users'
})
Users.hasMany(Notes, {
    foreignKey: 'user_id',
    as: 'notes'
})