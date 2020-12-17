import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../reducers/loginReducer';
import storage from '../utils/storage';

import SimpleLogo from '../assets/SimpleLogo.png';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const Navigation = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login);

  const handleLogout = () => {
    dispatch(logout());
    storage.logoutUser();
  };

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#212121',
      },
      secondary: {
        main: '#FFFFFF',
      },
    },
  });

  const imgDiv = {
    marginTop: 10,
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          <AppBar position="static">
            <Toolbar>
              <Box display="flex" flexGrow={1}>
                <Button color="inherit" component={Link} to="/">
                  home
                </Button>
                <Button color="inherit" component={Link} to="/blogs">
                  blogs
                </Button>
                <Button color="inherit" component={Link} to="/users">
                  users
                </Button>
              </Box>
              <Box>
                <div>
                  {user ? (
                    <em marginLeft="20">{user.username} logged in</em>
                  ) : (
                    <Button component={Link} to="/login">
                      login
                    </Button>
                  )}
                  {user ? (
                    <Button
                      marginLeft="20"
                      color="inherit"
                      onClick={handleLogout}
                    >
                      logout
                    </Button>
                  ) : null}
                </div>
              </Box>
            </Toolbar>
          </AppBar>
        </div>
      </ThemeProvider>

      <div style={imgDiv}>
        <img src={SimpleLogo} alt="Logo" />;
      </div>
    </>
  );
};

export default Navigation;
