import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name field is required.']
    },
    body: {
        type: String,
        required: [true, 'Body field is required.']
    }
})

const Message = mongoose.model('message', MessageSchema);
export default Message;