import { UserOutlined } from "@ant-design/icons";
import { Input } from 'antd';

const LogIn = ({ me, setMe, handleLogin }) => {
    return (
      <Input.Search
        size="large"
        style={{ width: 300, margin: 50 }}
        prefix={<UserOutlined/>}
        enterButton="Sign In"
        placeholder="Enter your name"
        value={me}
        onChange={(e) => setMe(e.target.value)}
        onSearch={(name) => handleLogin(name)}
      ></Input.Search>
    );
  }

export default LogIn;