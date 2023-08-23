import './App.css'
// import { Button, Input, Tag, message } from 'antd'
import { useEffect } from 'react';
import { useChat } from './hooks/useChat.js';
import styled from 'styled-components';
import SignIn from './containers/SignIn.js';
import ChatRoom from './containers/ChatRoom.js';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 500px;
  margin: auto;
`;

const App = () => {
  const { status, signedIn, displayStatus } = useChat();

  useEffect(() => {
    displayStatus(status);
  }, [status]);

  return (
    <Wrapper>{ signedIn? <ChatRoom /> : <SignIn />}</Wrapper>
  );
}

export default App;
