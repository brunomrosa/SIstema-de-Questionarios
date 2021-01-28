import styled from 'styled-components';
import { darken } from 'polished';
export const Container = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  .create-form {
    display: flex;
    justify-content: center;


    a {
      color: #151591;
      margin-left: 5px;
      font-weight: 500;
      font-size: 16px;
    }
  }
  button {
    height: 60px;
    width: 100px;
    margin: 10px;
    //hex #2a98ff
    background: rgb(168, 213, 255, 0.9);
    color: #fff;
    border: 0;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#a8d5ff')};
    }
  }
  div {
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
  h1 {
    display: flex;
    justify-content: center;
  }
  h3 {
    display: flex;
    justify-content: center;
  }
`;

export const Content = styled.div``;

export const Box = styled.div`
  display: flex;
  height: 60px;
  max-width: 400px;
  margin: 20px 60px;
  align-self: center;
  border-radius: 10px;
  box-shadow: 0 5px 25px ${darken(0.05, '#78aad8')};
  background-color: #c9e3fb;
  @media only screen and (max-width: 720px) {
    min-width: 40vmax;
    margin: 10px 0px;
  }
  align-items: center;
  justify-content: center;

  button {
    height: 30px;
    width: 80px;
    margin: 10px;
    //hex #a8d5ff
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
    background: rgba(0, 0, 0, 0.3);
    height: 30px;
    border: 0;
    border-radius: 4px;
    height: 44px;
    width: 50%;

    padding: 0 15px;
    color: #fff;
    margin: 0 0 10px 10px;
    @media only screen and (max-width: 812px) {
      margin: 5px 10px;
    }
    border: 1px solid rgba(0, 0, 0, 0.1);
    transition: 0.2s;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }

    &:focus {
      box-shadow: 0 0 5px #a8d5ff;
      border: 1px solid #a8d5ff;

      &::placeholder {
        color: #a8d5ff;
      }
    }
  }
  h3 {
    margin: 10px;
  }
  h4 {
    margin: 5px;
  }
`;
