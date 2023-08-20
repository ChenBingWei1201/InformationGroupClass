import { Tag } from "antd";
import styled from 'styled-components';

const StyledMessage = styled.p`

`;

const Message = ({ name, body }) => {
  return (
    <StyledMessage>
      <p><Tag color="blue">{name}</Tag> {body}</p>
    </StyledMessage>
  );
};

export default Message;