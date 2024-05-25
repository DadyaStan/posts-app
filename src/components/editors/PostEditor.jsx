import React, { useState } from 'react';
import { Input, Button, Space } from 'antd';

const { TextArea } = Input;

const PostEditor = ({ post, onSave }) => {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleSave = () => {
    onSave({ ...post, title, body });
  };

  return (
    <div>
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post Title"
        />
        <TextArea
          rows={4}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Post Body"
        />
        <Button type="primary" onClick={handleSave}>
          Save
        </Button>
      </Space>
    </div>
  );
};

export default PostEditor;
