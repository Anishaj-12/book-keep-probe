const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const User = require('./models/User');
const error = require('./middlewares/errorMiddlewareHandler')
const  usersRoute = require('./routes/usersRoute');
const bookRouter = require('./routes/bookRoutes');

dotenv.config();

require('./config/dbConnect') ();

const app = express()



//passing body data
app.use(express.json())

//Routes
//Users
app.use('/api/users', usersRoute )
//Books
app.use('/api/books', bookRouter )


console.log(process.env.MY_NAME)



//error middleware
app.use(error.errorMiddlewareHandler)


//server


const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log(`gute Arbeit with ${PORT}`)
} )


//mongodb username (anis1)
//mot de passe anishaj8
//mongodb+srv://anishaj8:<password>@cluster0.thkwl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority