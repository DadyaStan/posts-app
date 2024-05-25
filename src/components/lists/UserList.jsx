import React from 'react';
import { List } from 'antd';
import UserCard from '../cards/UserCard';

const UserList = ({ users }) => {
  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={users}
      renderItem={(user) => (
        <List.Item>
          <UserCard user={user} />
        </List.Item>
      )}
    />
  );
};

export default UserList;