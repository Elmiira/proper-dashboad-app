import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { setUserToken } from 'containers/Login/actions';
import Header from 'components/Layout/Header';
import { PrivateRoutes as Routes } from 'containers/Routes/index';
import SideBar from 'components/Layout/SideBar';
import { getUserInfo, getToken } from 'containers/Login/selector';
import './getStyles';

const Dashboard = props => {
  const onLogout = () => {
    props.logOut();
  };

  const login = () => <Redirect to="/login" />;

  /**
  * @param {any} userInfo   - shape of {
    * @param {string} avatar 
    * @param {string} username 
    }
   */
  const letsGO = () => {
    return (
      <div className="container-area">
        <SideBar match={props.match} location={props.location} />
        <div className="w-100">
          <Header
            username={props.userInfo.username}
            avatar={props.userInfo.avatar}
            onLogout={onLogout}
          />
          <main>
            <div className="main-container">
              <Routes match={props.match} />
            </div>
          </main>
        </div>
      </div>
    );
  };

  return props.token ? letsGO(props) : login();
};

const mapStateToProps = state => ({
  userInfo: getUserInfo(state),
  token: getToken(state),
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(setUserToken()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
