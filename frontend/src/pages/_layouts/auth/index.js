import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './styles';

export default function AuthLayout({ children }) {
  return (
    <styles.Wrapper>
      <styles.Content>{children}</styles.Content>
    </styles.Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
