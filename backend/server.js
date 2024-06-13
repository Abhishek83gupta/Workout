require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
// Express app
const app = express()           

const workoutRoutes = require('./routes/workouts')


// connect to db
mongoose.connect(`${process.env.MONGODB_URI}`)
.then(()=>{

// listen for requests
app.listen(process.env.PORT,()=>{    
    console.log(`Connnecte to db and listening on port ${process.env.PORT}`);
})
})
.catch((err)=>{
    console.log(err);
})


//middleware
app.use(express.json())   // all the req comes in body is pass to req object 


// Routes
app.use('/api/workouts',workoutRoutes)











