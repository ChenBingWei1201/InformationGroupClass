import LogIn from "../components/Login.js";
import Title from "../components/Title.js";
import { useChat } from "../hooks/useChat.js";

const SignIn = () => {
  const { me, setMe, signedIn,setSignedIn, displayStatus } = useChat();
  const handleLogin = (name) => {
    if(!name)
      displayStatus({
        type: 'error',
        msg: 'Missing user name',
      });
    else
      setSignedIn(true);
  };

  
  return (
    <>
      <Title/>
      <LogIn me={me} setMe={setMe} handleLogin={handleLogin}/>
    </>
  );
}

export default SignIn;