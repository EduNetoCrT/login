const {Router} = require('express');
const userController = require('../conreollers/userController')

const routers = Router();

routers.post('/register', userController.register);

routers.post('/login', userController.login);




module.exports = routers;