import styled from 'styled-components';
import { darken } from 'polished';
export const Container = styled.div`
  h1 {
    display: flex;
    justify-content: center;
  }
  h2 {
    margin: 5px;
  }
  h3 {
    display: flex;
    justify-content: center;
  }
  ul {
    display: flex;
    flex-direction: column;
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

export const Box = styled.div`
  display: flex;
  min-height: 90px;

  min-width: 300px;
  max-width: 400px;
  margin: 20px 60px;
  align-self: center;
  border-radius: 10px;
  box-shadow: 0 5px 25px ${darken(0.05, '#78aad8')};
  background-color: #c9e3fb;

  align-items: center;
  justify-content: space-around;

  p {
    font-size: 14px;
    display: flex;
    margin: 10px;
  }
  button {

  }
  button {
    height: 30px;
    width: 80px;
    margin: 10px;
    background: rgb(168, 213, 255, 0.6);
    color: #fff;
    border: 0;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#a8d5ff')};
    }
  }
  input {
    height: 30px;
    margin: 10px;
  }
  h3 {
    margin: 10px;
  }
  h4 {
    margin: 5px;
  }
`;
