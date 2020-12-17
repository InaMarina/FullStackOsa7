import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const UserView = () => {
  //Users from state
  const users = useSelector((state) => state.users);

  return (
    <>
      <h2>Users</h2>
      {users.map((user) => (
        <div key={user.id}>
          <Link to={`/users/${user.id}`}>{user.username}</Link>
        </div>
      ))}
    </>
  );
};

export default UserView;
