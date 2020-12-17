import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createBlog } from '../reducers/blogReducer';

import Notification from './Notification';
import Togglable from './Togglable';
import NewBlog from './NewBlog';
import BlogView from './BlogView';

const HomePage = () => {
  const dispatch = useDispatch();

  const notification = useSelector((state) => state.notification);
  const user = useSelector((state) => state.login);

  const blogFormRef = React.createRef();

  const newBlog = async (blog) => {
    try {
      dispatch(createBlog(blog, user));
      blogFormRef.current.toggleVisibility();
    } catch (exception) {
      console.log(exception);
    }
  };
  const outerContainer = {
    display: 'flex',
    flexGrow: 1,
    minHeight: '100vh',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <div>
      <h2>blogs</h2>
      <Notification notification={notification} />
      <Togglable buttonLabel="create new blog" ref={blogFormRef}>
        <NewBlog createBlog={newBlog} />
      </Togglable>
      <BlogView />
    </div>
  );
};
export default HomePage;
