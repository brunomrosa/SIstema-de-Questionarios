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
  max-width: 95%;
  width: 95%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex: 1 0 25%;
  flex-wrap: wrap;

  h1 {
    justify-content: center;
  }
`;

export const Box = styled.div`
  display: flex;
  height: 220px;
  width: 220px;
  margin: 20px 60px;
  align-self: center;
  border-radius: 10px;
  box-shadow: 0 5px 25px ${darken(0.05, '#78aad8')};
  background-color: #c9e3fb;

  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  h3 {
    margin: 10px;
  }
  h4 {
    margin: 5px;
  }
`;
