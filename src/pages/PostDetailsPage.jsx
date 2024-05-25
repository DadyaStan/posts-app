import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPost, updatePost } from '../features/posts/postsSlice';
import { fetchComments } from '../features/comments/commentsSlice';
import PostEditor from '../components/editors/PostEditor';
import CommentList from '../components/lists/CommentList';
import { Row, Col, Typography } from 'antd';
import LoadingSpinner from '../components/common/LoadingSpinner';

const PostDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id === parseInt(id))
  );
  const comments = useSelector((state) => state.comments.comments);
  const postStatus = useSelector((state) => state.posts.status);

  useEffect(() => {
    if (!post) {
      dispatch(fetchPost(id));
    }
    dispatch(fetchComments(id));
  }, [dispatch, id, post]);

  const handleSave = (updatedPost) => {
    dispatch(updatePost(updatedPost));
  };

  if (postStatus === 'loading') {
    return <LoadingSpinner />;
  }

  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={16}>
        <Col span={12}>
          {post && <PostEditor post={post} onSave={handleSave} />}
        </Col>
        <Col span={12}>
          <Typography.Title level={2}>Comments</Typography.Title>
          <CommentList comments={comments} />
        </Col>
      </Row>
    </div>
  );
};

export default PostDetailsPage;
