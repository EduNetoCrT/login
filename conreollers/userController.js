 const User = require('../models/User');
const { use } = require('../routers/userRouter');
const bcrypt = require('bcryptjs');
 
 const user = new User();


 const userController = {
    register : async(req, res) => {
        const {name, email, password} = req.body;

        const verificEmail = await User.findOne({email});

        if(verificEmail)
        return res.json({msg: 'Email já cadastrado.'})

        const PWDhash = bcrypt.hashSync(password); 
        
        const user = new User({name, email, PWDhash})
        try {
            const savedUser = await user.save()
            res.json({user: savedUser})
            
        } catch(error){
            res.json({error}).status(400)
            console.log(error,'Erro de conecção')
        }
    },


    login : async(req, res) => {

       const {email, password} =  req.body;

       const selectUser = await User.findOne({email});

       if(!selectUser)
       return res.json({msg: "Usuário inixixstente"}).status(400);

       const paasswordUserMatch = bcrypt.compareSync(password, selectUser.PWDhash);

       if(!paasswordUserMatch)
       return res.json({msg:'Senha incorreta.'}).status(400);

       res.json({msg: 'Usuário logado'});

       

    }
}


module.exports = userController;