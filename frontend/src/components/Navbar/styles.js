import styled from 'styled-components';

export const Container = styled.div`
  @media only screen and (max-width: 720px) {
    min-width: 50vmax;
  }
  a {
    font-weight: bold;
    color: rgba(0, 0, 0, 0.8);
  }
  background: #fff;
  color: rgba(0, 0, 0, 0.8);
  padding: 0 30px;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  width: 100%;
  position: sticky;
  top: 0;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      a {
        color: rgba(0, 0, 0, 0.8);
      }
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.8);
    }
  }
`;
