import styled from 'styled-components';
import { useChat } from '../hooks/useChat.js';
import { Button, Input } from 'antd';
import { useState, useRef, useEffect } from 'react';
import Message from '../components/Message.js';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 500px;
  margin: auto;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChatBoxesWrapper = styled.div`
  width: 100%;
  height: 300px;
  background: #eeeeee52;
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
  overflow: auto;
`;

const FootRef = styled.div`
  height: 20px
`;



const ChatRoom = () => {
  const { me, messages, displayStatus, sendMessage } = useChat();
  const [username, setUsername] = useState("");
  const [body, setBody] = useState("");
  const [msgSent,setMsgSent] = useState(false);
  
  // 超過視窗⾼度的留⾔可以⾃動上捲
  const msgFooter = useRef(null);
  const scrollToBottom = () => {
    msgFooter.current?.scrollIntoView
    ({ behavior: 'smooth', block: "start" });
  };

  useEffect(() => {
    scrollToBottom();
    setMsgSent(false);
  }, [msgSent]);

  return (
      <Wrapper>
        <Title>
          <h1>{me}'s Chat Room</h1>
          {/* <Button type="primary" danger >
            Clear
          </Button> */}
        </Title>
        <ChatBoxesWrapper>
          {messages.length === 0 ? (
            <p style={{ color: '#ccc' }}>No messages...</p>
            ) : (
              messages.map(({name, body}) => (
                <Message name={name} body={body}/>
              ))
              )
          } 
        </ChatBoxesWrapper>
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginBottom: 10 }}
        ></Input>
        <Input.Search
          enterButton="Send"
          placeholder="Type a message here..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          onSearch={(msg) => {
            if (!msg || !username) {
              displayStatus({
                type: 'error',
                msg: 'Please enter a message body.'
              })
              return;
            }
            sendMessage({ name: username, body: msg });
            setBody("");
          }}
        ></Input.Search>
      </Wrapper>

  )
}

export default ChatRoom;