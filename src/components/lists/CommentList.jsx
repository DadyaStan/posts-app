import React from 'react';
import { List, Typography } from 'antd';

const CommentList = ({ comments }) => {
  return (
    <List
      itemLayout="vertical"
      dataSource={comments}
      renderItem={(comment) => (
        <List.Item key={comment.id}>
          <Typography.Text strong>{comment.name}</Typography.Text>
          <Typography.Paragraph>{comment.body}</Typography.Paragraph>
        </List.Item>
      )}
    />
  );
};

export default CommentList;

