import mongoose from "mongoose";
const Schema = mongoose.Schema;

/******* User Schema *******/
const UserSchema = new Schema({
  name: { 
    type: String, 
    required: [true, 'Name field is required.'] 
  },
  chatBoxes: [{ 
    type: mongoose.Types.ObjectId, 
    ref: 'ChatBox' 
  }],
});

const UserModel = mongoose.model('User', UserSchema);

/******* Message Schema *******/
const MessageSchema = new Schema({
  chatBox: { 
    type: mongoose.Types.ObjectId, 
    ref: 'ChatBox' 
  },
  sender: { 
    type: mongoose.Types.ObjectId, 
    ref: 'User' 
  },
  body: { 
    type: String, 
    required: [true, 'Body field is required.'] 
  },
});

const MessageModel = mongoose.model('Message', MessageSchema);

/******* ChatBox Schema *******/
const ChatBoxSchema = new Schema({
  name: { 
    type: String, 
    required: [true, 'Name field is required.'] 
  },
  users: [{ 
    type: mongoose.Types.ObjectId, 
    ref: 'User' 
  }],
  messages: [{ 
    type: mongoose.Types.ObjectId, 
    ref: 'Message' 
  }],
});

const ChatBoxModel = mongoose.model('ChatBox', ChatBoxSchema);

export { UserModel, MessageModel, ChatBoxModel};