import { useChat } from '../hooks/useChat.js';
import { useState, useRef, useEffect } from 'react';
import Message from '../components/Message.js';
import Title from '../components/Title.js';
import ChatModal from '../components/ChatModal.js';
import InputForm from '../components/InputForm.js';
import { ChatBoxWrapper, ChatBoxesWrapper, FootRef } from '../components/Wrapper.js';

const ChatRoom = () => {
  const { me, messages/*, displayStatus, sendMessage*/, startChat } = useChat();
  // const [body, setBody] = useState("");
  const [msgSent, setMsgSent] = useState(false);
  const [activeKey, setActiveKey] = useState(""); // 設定為目前被點選的 chatbox
  const [modalOpen, setModalOpen] = useState(false); // 控制Modal的開關
  const [chatBoxes, setChatBoxes] = useState([]); // displayed  chat boxes
  const [friend, setFriend] = useState(""); // store the person to whom I send messages 

  const displayChat = (chat) => {
    return (
      (chat.length === 0) ? (
        <p style={{ color: '#ccc' }}> No messages... </p>
      ) : (
          <ChatBoxWrapper>
            {chat.map(({name, body}, i) => (
              <Message isMe={(name === me)} message={body} key={i}></Message>
              ))
            }
            <FootRef ref={msgFooter}></FootRef>
          </ChatBoxWrapper>
        )
    );
  }

  const extractChat = (friend) => { // call it two times
    const ch = displayChat(messages.filter(({name}) => ((name === friend) || (name === me))));
    return ch;
  }

  const createChatBox = (friend) => {
    if (chatBoxes.some(({key}) => key === friend)) {
      throw new Error(friend +"'s chat box has already opened.");
    }
    const chat = extractChat(friend);
    setChatBoxes([...chatBoxes, { 
      label: friend, 
      children: chat,
      key: friend 
    }]);
    setMsgSent(true);
    return friend;
  };

  const removeChatBox = (targetKey, activeKey) => {
    const index = chatBoxes.findIndex(({key}) => key === activeKey);
    const newChatBoxes = chatBoxes.filter(({key}) => key !== targetKey);
    setChatBoxes(newChatBoxes);

    return ( // 判斷刪除 targetKey 後，如何更新 activeKey
      activeKey ? 
        activeKey === targetKey ?
          index === 0 ?
          "" : chatBoxes[index-1].key
        : activeKey
      : ""
      );
  }

  // 超過視窗⾼度的留⾔可以⾃動上捲
  const msgFooter = useRef(null);
  const scrollToBottom = () => {
    msgFooter.current?.scrollIntoView({ behavior: 'smooth', block: "start" });
  }

  useEffect(() => {
    scrollToBottom();
    setMsgSent(false);
  }, [msgSent, chatBoxes]);

  useEffect(() => {
    if (chatBoxes.length !== 0) {
      const index = chatBoxes.findIndex(({key}) => key === activeKey);
      const chat = extractChat(friend);
      const newChatBoxes = [...chatBoxes.slice(0, index), {label: activeKey, children: chat, key: activeKey}, ...chatBoxes.slice(index+1,)];
      setChatBoxes(newChatBoxes);
      setMsgSent(true);
    }
  }, [messages]);

  return (
      <>
        <Title name={me}></Title>
        <>
          <ChatBoxesWrapper
            tabBarStyle={{height: '36px'}}
            type='editable-card'
            activeKey={activeKey}
            onChange={(key) => {
              setFriend(key);
              setActiveKey(key);
              startChat(me, key);
            }}
            onEdit={(targetKey, action) => { // 按下 '+' 後會觸發 onEdit, 傳入 action = 'add'
                if (action === "add")  // 開啟⼀個 Modal, 讓使⽤者填入 new chatbox label
                  setModalOpen(true);
                else if (action === "remove") // 按下 'x' 後會觸發 onEdit, 傳入 action = 'remove'
                  setActiveKey(removeChatBox(targetKey, activeKey)); // 按下 'x' 後會觸發 onEdit, 傳入 action = 'remove'
            }}
            items={chatBoxes}
          >
            {/* <FootRef ref={msgFooter}/> */}
          </ChatBoxesWrapper>
          <ChatModal
            open={modalOpen}
            onCreate={({ name }) => { // 按下 Create 後的動作
                setFriend(name);
                startChat(me, name);
                setActiveKey(createChatBox(name));
                setModalOpen(false);
            }} // can send message to myself
            onCancel={() => setModalOpen(false)} // 按下 Cancel 後的動作
          />
        </>
        <InputForm setMsgSent={setMsgSent} activeKey={activeKey}/>
        {/* <Input.Search
          enterButton="Send"
          placeholder="Type a message here..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          onSearch={(msg) => {
            if (!msg) {
              displayStatus({
                type: 'error',
                msg: 'Please enter a message body.'
              })
              return;
            }
            sendMessage({ name: me, to: activeKey, body: msg });
            setBody("");
            setMsgSent(true);
          }}
        ></Input.Search> */}

      </>

  )
}

export default ChatRoom;