import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <Card title={post.title}>
      <p>{post.body}</p>
      <Link to={`/posts-app/post/${post.id}`}>View Post</Link>
    </Card>
  );
};

export default PostCard;

