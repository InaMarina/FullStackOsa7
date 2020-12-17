import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { initializeBlogs } from './reducers/blogReducer';
import { initializeUsers } from './reducers/userReducer';
import { useDispatch, useSelector } from 'react-redux';

import HomePage from './components/HomePage';
import Login from './components/Login';
import UserView from './components/UserView';
import User from './components/User';
import Navigation from './components/Navigation';
import BlogView from './components/BlogView';
import Blog from './components/Blog';

//Material Ui
import Container from '@material-ui/core/Container';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeBlogs());
    dispatch(initializeUsers());
  }, [dispatch]);

  const user = useSelector((state) => state.login);

  return (
    <Container>
      <Router>
        {user && (
          <div>
            <Navigation />
          </div>
        )}
        <Switch>
          <Route
            path="/users/:id"
            render={() => (user ? <User /> : <Redirect to="/login" />)}
          />
          <Route
            path="/users"
            render={() => (user ? <UserView /> : <Redirect to="/login" />)}
          />
          <Route
            path="/blogs/:id"
            render={() => (user ? <Blog /> : <Redirect to="/login" />)}
          />
          <Route
            path="/blogs"
            render={() => (user ? <BlogView /> : <Redirect to="/login" />)}
          />
          <Route path="/login">
            <Login />
          </Route>
          <Route
            path="/"
            render={() => (user ? <HomePage /> : <Redirect to="/login" />)}
          />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
