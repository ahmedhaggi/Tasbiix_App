import express from "express";
import mongoose from "mongoose";
import habbitsRoute from "./routes/habbitsRoute.js";


const app = express()
app.use(express.json)

const PORT = 3000;
app.use('/api/habbits', habbitsRoute)
app.listen(PORT, () => {
    console.log(`Server is runing on port:${PORT}`)
})

mongoose.connect("mongodb+srv://ahmedhaggi:Ahmed123@cluster1.ldvcs1k.mongodb.net/TasbiixApp?retryWrites=true&w=majority&appName=Cluster1")
    .then(() => {
        console.log('Connected to MongoDB')
    }).catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });