import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => (
  <Card title={user.name}>
    <p><strong>Username:</strong> {user.username}</p>
    <p><strong>Email:</strong> {user.email}</p>
    <p><strong>Phone:</strong> {user.phone}</p>
    <p><strong>Website:</strong> {user.website}</p>
    <p><strong>Company:</strong> {user.company.name}</p>
    <p><strong>Address:</strong> {`${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</p>
      <Link to={`/posts-app/user/${user.id}`}>View Posts</Link>
  </Card>
);

export default UserCard;