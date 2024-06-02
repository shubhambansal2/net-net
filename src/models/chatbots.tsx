// models/Chatbot.js
import mongoose, {models} from "mongoose";
// const mongoose = require('mongoose');

const chatbotSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, // Add the _id field
    chatbots: {
        // Correct way to define the schema for dynamic keys
        type: Map,
        of: new mongoose.Schema({
            role: [String],
            query: [String],
        }),
    },
});

const Chatbots = models.chatbots || mongoose.model('chatbots', chatbotSchema);

module.exports = Chatbots;