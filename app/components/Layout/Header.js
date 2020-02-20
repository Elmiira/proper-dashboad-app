import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Avatar from '@material-ui/core/Avatar';
import 'assets/style/header.scss';

export default function Header({ onLogout, username, avatar }) {
  return (
    <header className="header">
      <div className="user-info dropdown">
        <div
          className="dropdown-btn dropdown-toggle d-flex align-items-center"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <div className="person-img">
            <Avatar src={avatar}/>
          </div>
          <div className="person-name">
            {username || ''} <i className="stf-icon-caret-down" />
          </div>
        </div>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" onClick={onLogout}>
            <FormattedMessage {...messages.Logout} />
          </a>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  userInfo: PropTypes.string,
  onLogout: PropTypes.func,
};
