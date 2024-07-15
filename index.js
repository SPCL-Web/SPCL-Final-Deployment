

// const express = require('express');
import express from 'express';
import cors from 'cors';
import  dotenv  from 'dotenv';
import dbConnect from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
import BlogRoutes from './routes/blogRoutes.js'
import QuizRoutes from './routes/quizRoutes.js'
import { v2 as cloudinary } from 'cloudinary';

import path from 'path';
import { fileURLToPath } from 'url';
const app = express();

// Create __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// load config from env file

dotenv.config();
const PORT = process.env.PORT || 4000;

//middleware. to parse json request body - Help TO pass data from the body.



cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});
app.use(express.json({ limit: '50mb' })); // Set the limit as per your requirement
app.use(express.urlencoded({ extended:true})); // To Parse form data in the request body



app.use(express.json());
app.use(cors());
dbConnect();
app.use(express.static(path.join(__dirname, './client/build')));





app.listen(PORT,()=>{
    console.log(`Sevver Started successfully at ${PORT}`);
});

// connectes to the database
app.use('/api/v1',authRoutes)
app.use('/api/v1/category',categoryRoutes)
app.use('/api/v1/blog',BlogRoutes)
app.use('/api/v1/quiz',QuizRoutes)




// Catch-all route to serve React application for any route not handled by the above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
  });


// default Route
app.get("/", (req, res) =>{
    res.send(`<h1>This is Home Page</h1>`);

})







