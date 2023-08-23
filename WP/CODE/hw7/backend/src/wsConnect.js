import Message from "./models/message.js";
import { ChatBoxModel } from './models/chatbox.js'

const chatBoxes = {}; // 在 global scope 將 chatBoxes 宣告成空物件

// Utility function to ensure uniqueness of chatbox name
const makeName = (name, to) => {
  return [name, to].sort().join("_");
}

// To check out a chatbox with { chatBoxName, [sender, receiver] }
const validateChatBox = async (name, participants) => {
  let box = await ChatBoxModel.findOne({ name });
  if (!box)
    box = await new ChatBoxModel({ name, users: participants }).save();
  return box.populate(["users", {path: "messages", populate: "sender" }]);
};

const sendData = (data, ws) => {
  ws.send(JSON.stringify(data));
}

const sendStatus = (payload, ws) => {
  sendData(["status", payload], ws);
}

// const broadcastMessage = (wss, data, status) => {
//   wss.clients.forEach((client) => {
//     sendData(data, client);
//     sendStatus(status, client);
//   });
// };

export default {
  initData: (ws) => {
    Message.find().sort({ created_at: -1 }).limit(100)
      .then((res) => {
        // initialize app with existing messages
        sendData(['init', res], ws);
      })
      .catch((e) => {
        throw new Error(e);
      })
  },
  onMessage: (wss, ws) => (
    async (byteString) => {
      const { data } = byteString;
      const [task, payload] = JSON.parse(data);
      switch (task) {
        case 'CHAT': {
          const { name, to } = payload;
          const chatBoxName = makeName(name, to);
          // 如果不曾有過 chatBoxName 的對話，將 chatBoxes[chatBoxName] 設定為 empty Set
          if (!chatBoxes[chatBoxName])
            chatBoxes[chatBoxName] = new Set(); // make new record for chatbox
          // 將 ws client 加入 chatBoxes[chatBoxName]
          chatBoxes[chatBoxName].add(ws); // add this open connection into chatbox

          if (ws.box !== "" && chatBoxes[ws.box])
            // user(ws) was in another chatbox
            chatBoxes[ws.box].delete(ws);

          ws.box = chatBoxName;

          // Save payload to DB
          const message = new Message({ isMe, body });
          try {
            await message.save();
          } catch (e) {
            throw new Error("Message DB save error: " + e);
          }
          
          // Respond to client
          sendData(['output', [payload]], ws);
          sendStatus({ // backend display success
            type: 'success',
            msg: 'Message sent.'
          }, ws);
          break;
        }
        case 'MESSAGE':{
          const { name, to, body } = payload;

          // broadcastMessage(ws, ['cleared'], { type: 'info', msg: 'Message cache cleared.' });
          break;
        }
        default:
          break;
      }
    }
  )
}
