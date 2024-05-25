import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPosts } from '../features/posts/postsSlice';
import PostList from '../components/lists/PostList';
import { Typography } from 'antd';
import LoadingSpinner from '../components/common/LoadingSpinner';

const UserPostsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) =>
    state.posts.posts.filter((post) => post.userId === parseInt(id))
  );
  const postStatus = useSelector((state) => state.posts.status);

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchPosts());
    }
  }, [dispatch, posts.length]);

  if (postStatus === 'loading') {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Typography.Title level={2}>User's Posts</Typography.Title>
      <PostList posts={posts} />
    </div>
  );
};

export default UserPostsPage;

