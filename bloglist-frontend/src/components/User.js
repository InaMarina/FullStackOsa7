import React from 'react';
import {
  // ...
  useParams,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

const User = () => {
  const users = useSelector((state) => state.users);
  const id = useParams().id;

  const user = users.find((user) => user.id === id);
  console.log('user from user use params');
  console.log(user);

  if (!user) {
    return null;
  }

  const userBlogs = user.blogs;

  return (
    <div>
      <p>Blogs by:</p>
      <h2>{user.name}</h2>
      {userBlogs.map((blog) => (
        <li key={blog.id}>{blog.title}</li>
      ))}
    </div>
  );
};

export default User;
