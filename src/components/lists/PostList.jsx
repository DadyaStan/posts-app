import React from 'react';
import { List } from 'antd';
import { Link } from 'react-router-dom';
import PostCard from '../cards/PostCard';

const PostList = ({ posts }) => (
  <List
    grid={{ gutter: 16, column: 1 }}
    dataSource={posts}
    renderItem={(post) => (
      <List.Item>
        <Link to={`/posts-app/post/${post.id}`}>
          <PostCard post={post} />
        </Link>
      </List.Item>
    )}
  />
);

export default PostList;





