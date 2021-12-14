const AppController = require('./Routes/app.controller');
const UserController = require('./Routes/user/user.controller');
module.exports = [
    {
        path: '/',
        control: AppController
    },
    {
        path: '/auth',
        control: UserController,
    }
]