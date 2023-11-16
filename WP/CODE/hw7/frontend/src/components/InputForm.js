import { useState } from "react";

import { Input } from "antd";

import { useChat } from "../hooks/useChat";

export default function InputForm({ setMsgSent, activeKey }) {
  const [body, setBody] = useState("");
	const { sendMessage, me } = useChat();
	
  return (
    <Input.Search
      enterButton="Send"
      style={{ background: "#097fed", borderRadius: "0.5rem" }}
      placeholder="Type a message here..."
      value={body}
      onChange={(e) => setBody(e.target.value)}
      onSearch={(msg) => {
        if (!msg) {
          alert("Please enter a message body.");
          return;
        }
        sendMessage({ name: me, to: activeKey, body: msg });
        setBody("");
        setMsgSent(true);
      }}
    ></Input.Search>
  );
}
