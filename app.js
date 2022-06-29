require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./routers/userRouter.js');
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://userlogin:uL4vNerORsY9r0ED@cluster0.6ft7s.mongodb.net/?retryWrites=true&w=majority',
     { useNewUrlParser: true,
     useUnifiedTopology: true
    },
    (error) => {
        if(error)
            console.log(error)
        else
            console.log('Conectado')
    } );


app.use('/user', userRouter)



app.listen(process.env.PORT, () => console.log(`Server in port ${process.env.PORT}`));