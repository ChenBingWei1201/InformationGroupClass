import { useState } from "react";

const useChat = () => {
    const client = new WebSocket('ws://localhost:4000');

    const [messages, setMessages] = useState([]);
    const [status, setStatus] = useState("");

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
        setStatus({
            type: "success",
            msg: "Message sent."
        });
        sendData(["input", msg]);
    };

    const clearMessages = () => {
        sendData(["clear"]);
    };

    return { status, messages, sendMessage, clearMessages };
};

export default useChat;