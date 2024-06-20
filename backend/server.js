require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
// Express app
const app = express()           

const connectDB = require('./db/index.js')

const workoutRoutes = require('./routes/workouts')

connectDB()
.then(()=>{
   app.listen(process.env.PORT || 4000,()=>{
     console.log(`Server is running on port ${process.env.PORT}`);
   })
})
.catch((err)=>{
  console.log(`MONGO DB connection Failed !!!!`,err);
})

//middleware
app.use(express.json())   // all the req comes in body is pass to req object 


// Routes
app.use('/api/workouts',workoutRoutes)




















