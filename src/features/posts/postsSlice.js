import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
});

export const fetchPost = createAsyncThunk('posts/fetchPost', async (postId) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  return response.data;
});

export const updatePost = createAsyncThunk('posts/updatePost', async (updatedPost) => {
  const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`, updatedPost);
  return response.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const index = state.posts.findIndex((post) => post.id === action.payload.id);
        state.posts[index] = action.payload;
      });
  },
});

export default postsSlice.reducer;
