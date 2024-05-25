import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../features/users/usersSlice';
import UserList from '../components/lists/UserList';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { Typography } from 'antd';

const UsersPage = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch, users.length]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Typography.Title level={2}>Users</Typography.Title>
      <UserList users={users} />
    </div>
  );
};

export default UsersPage;