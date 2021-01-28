import styled from 'styled-components';
import { darken } from 'polished';
export const Container = styled.div`
  h1 {
    display: flex;
    justify-content: center;
  }
  .create-form {
    display: flex;
    justify-content: center;

    h3 {
      font-weight: 500;
      font-size: 16px;
    }
    a {
      color: #151591;
      margin-left: 5px;
      font-weight: 500;
      font-size: 16px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  align-items: center;

  input {
    width: 75%;
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    margin: 0 0 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    transition: 0.2s;
  }

  span {
    color: #b70d0e;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }

  button {
    margin: 25px 0 25px;
    height: 44px;
    width: 75%;
    background: rgb(168, 213, 255, 0.6);
    color: #fff;
    border: 0;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#a8d5ff')};
    }
  }
`;
