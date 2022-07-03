const {Router} = require('express');
const auth = require('../conreollers/authController')
const routers = Router();

routers.get('/', auth ,(req, res) => {
    res.json({msg:"Rota privada do admin"})
})



module.exports = routers;