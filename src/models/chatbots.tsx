// models/Chatbot.js
import mongoose, {Model, models} from "mongoose";

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

let Chatbots: Model<any>;
console.log("Models chatbot: " + models.chatbots);

if (!models.chatbots) {
    Chatbots = mongoose.model('chatbots', chatbotSchema);
} else {
    Chatbots = models.chatbots;
}
module.exports = Chatbots;