/**
 *
 * Login
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import LoginForm from 'components/Form/SubmitForm/index';
import messages from './messages';
import { loginUser } from './actions';
import reducer from './reducer';
import saga from './saga';
import { getToken } from './selector';

/**
 * @param {any} onLogin  dispatch an action to store and trigger a saga
 * @param {any} loading   show whether client is requesting any server
 * @returns {LoginForm}   a presentational dumb component
 */
function Login(props) {
  const { onLogin, loading, location, history } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (props.token && location.pathname === '/login') {
      history.push('/');
    }
  });

  const isEmpty = inputVar => inputVar === '' || inputVar === undefined;

  const onUserLogin = () => {
    onLogin({ username, password });
  };

  const getFormValues = () => [
    {
      value: username,
      label: 'username',
      displayLabel: 'username',
      type: 'username',
      updateValue: setUsername,
    },
    {
      value: password,
      label: 'password',
      displayLabel: 'password',
      type: 'password',
      updateValue: setPassword,
    },
  ];

  return (
    <LoginForm
      welcomeMsg={<FormattedMessage {...messages.WelcomeMessage} />}
      formValues={getFormValues()}
      onSubmit={onUserLogin}
      submitLabel={<FormattedMessage {...messages.Send} />}
      disabled={isEmpty(username) || isEmpty(password) || loading}
      loading={loading}
    />
  );
}

const mapDispatchToProps = dispatch => ({
  onLogin: params => dispatch(loginUser(params)),
});

const mapStateToProps = state => ({
  loading: state.global.loading,
  token: getToken(state),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'watchUserSagas', saga });
const withReducer = injectReducer({ key: 'user', reducer });

export default compose(
  withConnect,
  withReducer,
  withSaga,
)(Login);

Login.propTypes = {
  onLogin: PropTypes.func,
  loading: PropTypes.bool,
};
