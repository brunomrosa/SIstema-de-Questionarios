import React from 'react';
import PropTypes from 'prop-types';

import NavBar from '~/components/Navbar';

import * as styles from './styles';
import 'antd/dist/antd.css';

export default function DefaultLayout({ children }) {
  return (
    <styles.Wrapper>
      <styles.Container>
        <NavBar />

        <styles.Content>{children}</styles.Content>
      </styles.Container>
    </styles.Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
