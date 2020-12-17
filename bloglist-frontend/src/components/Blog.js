import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { likeBlog, removeBlog } from '../reducers/blogReducer';
import { useDispatch, useSelector } from 'react-redux';

const Blog = () => {
  const dispatch = useDispatch();
  const id = useParams().id;

  const blogs = useSelector((state) => state.blogs);
  const user = useSelector((state) => state.login);

  const blog = blogs.find((blog) => blog.id === id);

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  };

  const handleRemove = async (blog) => {
    try {
      if (
        window.confirm(`Do you want to remove ${blog.title} by ${blog.author}?`)
      ) {
        dispatch(removeBlog(blog));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleLike = async (blog) => {
    try {
      const updatedBlog = {
        ...blog,
        likes: blog.likes + 1,
        user: blog.user.id,
      };
      dispatch(likeBlog(blog.id, updatedBlog));
    } catch (exception) {
      console.log(exception);
    }
  };

  if (!blog) {
    return null;
  }

  return (
    <div style={blogStyle} className="blog">
      <div>
        <h2>
          <i>{blog.title}</i> by {blog.author}{' '}
        </h2>
      </div>

      <div>
        <div>{blog.url}</div>
        <div>
          likes {blog.likes}
          <button onClick={() => handleLike(blog)}>like</button>
        </div>
        <div>added by {blog.user.name}</div>
        {user.username === blog.user.username && (
          <button onClick={() => handleRemove(blog)}>remove</button>
        )}
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Blog;
