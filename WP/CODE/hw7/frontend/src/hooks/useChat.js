import { useState, useEffect, createContext, useContext } from "react";
import { message } from 'antd'

const LOCALSTORAGE_KEY = "save-me";
const saveMe = localStorage.getItem(LOCALSTORAGE_KEY); 


// 1. define context
const ChatContext = createContext({
  status: {},
  displayStatus: () => {},
  me: "",
  signedIn: false,
  setSignedIn: () => {},
  messages: [],
  sendMessage: () => {},
  clearMessages: () => {},
  startChat: () => {},
  activeKey: "",
  setActiveKey:() => {},
})

// 2. define context provider
const ChatProvider = (props) => {
  const client = new WebSocket('ws://localhost:4000');

  const [me, setMe] = useState(saveMe || "");
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  
  useEffect(() => {
    if (signedIn) {
      localStorage.setItem(LOCALSTORAGE_KEY, me);
    }
  }, [me, signedIn]);

  client.onmessage = (byteString) => {
    const { data } = byteString;
    const [ task, payload ] = JSON.parse(data); // is [] not {}
    switch (task) {
      case "init": 
        setMessages(payload);
        break;
      case "output":
        setMessages(() => [...messages, ...payload]);
        break;
      case "status":
        setStatus(payload);
        break;
      case "cleared":
        setMessages([]);
        break;
      default:
        break;
    };
  };

  const sendData = async (data) => {
    await client.send(JSON.stringify(data));
  };

  const sendMessage = (msg) => {
    setMessages([...messages, msg]);
    // setStatus({ // frontend display success
    //   type: "success",
    //   msg: "Message sent."
    // });
    sendData(["input", msg]);
  };
      
  const clearMessages = () => {
    sendData(["clear"]);
  };

  const displayStatus = (s) => {
    if(s.msg) {
      const { type, msg } = s;
      const content = { content: msg, duration: 0.7 };
      switch (type) {
        case 'success':
          message.success(content);
          break;
        case 'error':
          message.error(content);
          break;
        case 'info':
          message.info(content);
          break;
        default:
          break;
      }
    }
  }

  const startChat = (name, to) =>  {

  }
  
  return (
    <ChatContext.Provider
      value={{
        status, me, signedIn, messages, setMe, setSignedIn,
        sendMessage, clearMessages, displayStatus
      }}
      {...props}
    />
  )
}

// 3. Define Context Consumer
const useChat = () => useContext(ChatContext);

export { ChatProvider, useChat };