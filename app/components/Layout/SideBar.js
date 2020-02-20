import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import messages from './messages';
import 'assets/style/sidebar.scss';

function SideBar({ location, match }) {
  const renderTenantTab = () => (
    <li key={'tenant-side-bar'} className={"side-bar-item"}>
      <Link className="menu-item" to={`${match.url}tenant`}>
        <span>
          <FormattedMessage {...messages.Tenant} />
        </span>
      </Link>
    </li>
  );
  return (
    <div className="sidebar">
      <ul className="list-unstyled sidebar-menu">
        <li className="dashboard-menu">
          <i className="stf-icon-angel-down" />
        </li>
        {renderTenantTab()}
      </ul>
    </div>
  );
}

export default SideBar;
