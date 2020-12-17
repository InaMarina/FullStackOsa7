import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { login } from '../reducers/loginReducer';
import { setNotification } from '../reducers/notificationReducer';

import Notification from './Notification';

import SimpleLogo from '../assets/SimpleLogo.png';

import { Button, TextField } from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LockIcon from '@material-ui/icons/Lock';
import Container from '@material-ui/core/Container';

const Login = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notification);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await dispatch(login(username, password));
      setUsername('');
      setPassword('');
      history.push('/');
      dispatch(
        setNotification({
          notification: ` Welcome back ${username}!`,
          style: 'success',
        })
      );
    } catch (exception) {
      console.log('wrong username/password');
      dispatch(
        setNotification({
          notification: 'Wrong username or password',
          style: 'error',
        })
      );
      setUsername('');
      setPassword('');
    }
  };

  const padding = {
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
  };
  const outerContainer = {
    display: 'flex',
    flexGrow: 1,
    minHeight: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const buttonStyle = {
    marginLeft: 15,
  };

  return (
    <Container style={outerContainer}>
      <div>
        <img src={SimpleLogo} alt="Logo" />;
      </div>
      <Notification notification={notification} />
      <div>
        <form onSubmit={handleLogin}>
          <div style={padding}>
            <div style={padding}>
              <AccountBoxIcon style={{ fontSize: 60 }} />
              <TextField
                variant="outlined"
                label="Username"
                id="username"
                value={username}
                onChange={({ target }) => setUsername(target.value)}
              />
            </div>
            <div style={padding}>
              <LockIcon style={{ fontSize: 60 }} />
              <TextField
                variant="outlined"
                label="Password"
                id="password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
            </div>
          </div>
          <div style={padding}>
            <Button
              style={buttonStyle}
              variant="contained"
              id="login"
              type="submit"
            >
              Login!
            </Button>
            <Button style={buttonStyle} variant="outlined" colour="primary">
              Not yet registered?
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Login;
