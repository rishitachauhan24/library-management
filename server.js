
const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const connectDB=require('./config/db');
dotenv.config();
connectDB();
app.use(express.json());

const app=express();

const studentRoutes=require('./routes/studentRoutes');
const courseRoutes=require('./routes/courseRoutes');
const enrollmentRoutes=require('./routes/enrollmentRoutes');

app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);
app.use('/enrollments', enrollmentRoutes);


app.listen(5000,()=>{
    console.log("Server is running on port 5000")

})