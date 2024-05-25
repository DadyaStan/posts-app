import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UsersPage from './pages/UsersPage';
import AppLayout from './layout/AppLayout';
import UserPostsPage from './pages/UserPostsPage';
import PostDetailsPage from './pages/PostDetailsPage';

const App = () => {
  return (
    <Routes>
      <Route path="posts-app/" element={<AppLayout />}>
        <Route index element={<UsersPage />} />
        <Route path="user/:id" element={<UserPostsPage />} />
        <Route path="post/:id" element={<PostDetailsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
