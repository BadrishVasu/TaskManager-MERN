import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },

    description: {
        type: String,
    },

    status: {
        type: String,
        enum: ["Pending", "In Progress", "Completed"],
        default: "Pending",
    },
    
    uploadDate: {
        type: Date,
        required: true,
    },
})

export const taskModel = new mongoose.model('tasks', taskSchema);