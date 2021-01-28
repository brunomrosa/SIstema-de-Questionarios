import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';

import { signOut } from '~/store/modules/auth/actions';

import * as styles from './styles';

function Navbar() {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <styles.Container>
      <styles.Content>
        <Link to="/dashboard">Dashboard</Link>
        <nav />

        <aside>
          <styles.Profile>
            <div>
              <strong>
                <a>{profile.name}</a>
              </strong>
              <Link to="/" onClick={handleSignOut}>
                Sair
              </Link>
            </div>
            <Avatar size={40} style={{ color: 'rgba(0, 0, 0, 0.8)' }}>
              {profile.name[0]}
            </Avatar>
          </styles.Profile>
        </aside>
      </styles.Content>
    </styles.Container>
  );
}

export default Navbar;
