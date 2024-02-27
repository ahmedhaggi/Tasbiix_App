import express from "express";
import mongoose from "mongoose";
import habbitsRoute from "./routes/habbitsRoute.js";
import dotenv from "dotenv";

dotenv.config();
const app = express()
app.use(express.json)

const PORT = 3000;
app.use('/api/habbits', habbitsRoute)
app.listen(PORT, () => {
    console.log(`Server is runing on port:${PORT}`)
})

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to MongoDB')
    }).catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });