import mongoose from "mongoose";

const habbitSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    isActive: {
        isActive: Boolean
    }
})

const Habbits = mongoose.model('habbits', habbitSchema);

export default Habbits;