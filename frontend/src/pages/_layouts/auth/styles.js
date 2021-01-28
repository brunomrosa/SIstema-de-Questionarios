import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eef2f6;
`;

export const Content = styled.div`
  width: 415px;
  max-width: 415px;
  max-height: 515px;
  text-align: center;
  background: #c9e3fb;
  border-radius: 4px;

  img {
    width: 120px;
    height: 120px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    align-items: center;

    input {
      background: rgba(0, 0, 0, 0.3);
      width: 75%;
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
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

    div {
      justify-content: center;
      align-items: center;
      display: flex;
      margin-bottom: 10px;
      a {
        margin: 0px;
        margin-left: 5px;
      }
      p {
        margin: 0px;
      }
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
  }
`;
