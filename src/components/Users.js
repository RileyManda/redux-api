import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersAsync } from '../store/users/usersSlice';

const Users = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.users.isLoading);
  const error = useSelector((state) => state.users.error);
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {' '}
        {error}
      </div>
    );
  }

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.login.uuid}>
            {user.name.first}
            {' '}
            {user.name.last}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
