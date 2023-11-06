import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    margin: 0;
    margin-right: 20px;
    font-size: 3em;
    }
`;

const Title = ({ name }) => {
    return <Wrapper><h1>{name? `${name}'s` : "My"} Chat Room</h1></Wrapper>
};

export default Title;