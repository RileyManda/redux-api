import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  { isLoaded, setError } from './store/users/usersSlice';

export default function Users() {

  const isLoading = useSelector((state) => state.users.isLoading);
  const error = useSelector((state) => state.users.error);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>Userslist</div>;
}
