import { ChatBoxModel, MessageModel, UserModel } from './models/chatbox.js'

// let sD = 0
const sendData = (data, ws) => {
  // sD += 1;
  ws.send(JSON.stringify(data));
  //-----------debug------------//
  // if (data[0] === "init")
  //   console.log("init", sD);
  // else if (data[0] === "status")
  //   console.log("status", sD)
  // else if (data[0] === "output")
  //   console.log("output" ,sD);
}

const sendStatus = (payload, ws) => {
  sendData(["status", payload], ws);
}

const broadcastMessage = (wss, data, status) => {
  wss.clients.forEach((client) => { // 8 things in wss.clients, so it will run 8 times!!!
    sendData(data, client);         // and generate two messages for success 
    sendStatus(status, client);
  });
};

const chatBoxes = {}; // 在 global scope 將 chatBoxes 宣告成空物件

// Utility function to ensure uniqueness of chatbox name
const makeName = (name, to) => {
  return [name, to].sort().join("_");
}

// To check out a chatbox with { chatBoxName, [sender, receiver] }
const validateChatBox = async (chatBoxName, participants) => {
  let box = await ChatBoxModel.findOne({ name: chatBoxName });
  const user1 = await UserModel.findOne({ _id: participants[0] });
  const user2 = await UserModel.findOne({ _id: participants[1] });
  if (!box) {
    box = await new ChatBoxModel({ name: chatBoxName, users: participants }).save();
    user1.chatBoxes = [...user1.chatBoxes, box._id];
    user2.chatBoxes = [...user2.chatBoxes, box._id];
    await user1.save();
    await user2.save();
  } // first new ChatBoxModel
  return box.populate(["users", { path: "messages", populate: "sender" }]);
};

// To add user
const validateUser = async (name) => { // problem: users should store chatBoxes(' name) where they participated.
  let user = await UserModel.findOne({ name: name });
  if (!user) {
    user = new UserModel({ name: name });  // , chatBoxes: [await ChatBoxModel.findOne({ name: makeName(name, to)})._id] 
    try {
      await user.save();
    } catch (e) {
      throw new Error("User addition error: " + e);
    }
  }
  return user._id;
};


//rack
const refreshChatBox = async (chatBoxName, body) => { 
  const existing = (await ChatBoxModel.findOne({ name: chatBoxName }));
  if (existing) {
    existing.messages = [...existing.messages, body];
    // await ChatBoxModel.deleteOne({ name: chatBoxName });
    try {
      await existing.save(); // update messages in specific chat box.
    } catch (e) {
      throw new Error("Update message failed: " + e);
    }
  }
}
//////

export default {
  onMessage: (wss, ws) => (
    async (byteString) => {
      const { data } = byteString;
      const [task, payload] = JSON.parse(data);
      switch (task) {
        case 'CHAT': {
          const { name, to } = payload;
          const chatBoxName = makeName(name, to); // generate new chatbox name
          // 如果不曾有過 chatBoxName 的對話，將 chatBoxes[chatBoxName] 設定為 empty Set
          if (!chatBoxes[chatBoxName])
            chatBoxes[chatBoxName] = new Set(); // make new record for chatbox
          // 將 ws client 加入 chatBoxes[chatBoxName]
          chatBoxes[chatBoxName].add(ws); // add this open connection into chatbox

          if (ws.box !== "" && chatBoxes[ws.box])
            // user(ws) was in another chatbox
            chatBoxes[ws.box].delete(ws);

          ws.box = chatBoxName;
          const Name = await validateUser(name); 
          const To = await validateUser(to);
          
          let initData = [];
          const chatMessages = (await validateChatBox(chatBoxName, [Name, To])).messages;
          console.log("chatMessages", chatMessages);
          console.log("-------------------------------");
          chatMessages.map((cM) => {
            const m = {
              name: cM.sender.name,
              to: to, // wrong 要真的追回去 populate
              body: cM.body
            }
            console.log(cM);
            initData = [...initData, m];
          });
          
          // Respond to client
          sendData(['init', initData], ws); // success!
          break;
        }
        case 'MESSAGE':{
          const { name, to, body } = payload;
          const chatBoxName = makeName(name, to);
          const message = new MessageModel({ // new message
            chatBox: (await ChatBoxModel.findOne({ name: chatBoxName }))._id, 
            sender: (await UserModel.findOne({ name: name }))._id,
            body: body // correct
          });

          refreshChatBox(chatBoxName, message); // add new message into chatBox

          try {
            await message.save();
          } catch (e) {
            throw new Error(e);
          }

          sendData(["output", [payload]], ws);
          sendStatus({ 
            type: "success", 
            msg: "Message sent." 
          }, ws);
          // broadcastMessage(wss, ["output", [payload]], { type: "success", msg: "Message sent." });
          break;
        }
        // case 'CLEAR':{
        //   const { name, to, body } = payload;

        //   // broadcastMessage(ws, ['cleared'], { type: 'info', msg: 'Message cache cleared.' });
        //   break;
        // }
        default:
          break;
      }
    }
  )
}
