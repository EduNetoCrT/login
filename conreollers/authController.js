const jwt = require('jsonwebtoken');


module.exports = function(req, res,next){
    const decode = req.header('authorization-token',);
    if(!decode) return res.json({msg:"Acesso negado"})
    
    try {
        const userVerified = jwt.verify(decode, process.env.TOKEN_SECRET);
        req.user = userVerified;
        next();

    } catch (error) {
        res.send('Acesso negado')
        console.log(error,'Erro no token')
        
    }
}