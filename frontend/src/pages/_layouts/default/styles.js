import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  /* background: ${darken(0.4, '#eef6f6')}; */
  background: #eef2f6;
  min-height: 50vmax;

  h1,
  h2,
  h3 {
    font-weight: bold;
  }
`;

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  padding: 24px;
`;
