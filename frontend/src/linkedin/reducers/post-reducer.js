import { createSlice } from "@reduxjs/toolkit";
import { findPostsThunk, deletePostsThunk, createPostThunk, updatePostThunk, findPostByAuthorThunk } from "../../services/posts-thunks";

const initialState = {
  posts: [],
  loading: false
}

const currentUser = {
  "name": "Gubi Ganguly",
  "position": "CEO of GubiLabs",

};

const templatePost = {
  ...currentUser,
  "time": "2h",
  "liked": false,
  "comments": 0,
  "reposts": 0,
  "isImage": false,
}




const postSlice = createSlice({
  name: "posts",
  initialState,
  // server reducers (action.payload is response from server)
  extraReducers: {
    // Find all posts
    [findPostsThunk.pending]: (state, action) => {  // server response pending
      state.loading = true
      state.posts = []  // Display empty list of posts if loading
    },
    [findPostsThunk.fulfilled]: (state, action) => {  // server response fullfilled
      state.loading = false
      state.posts = action.payload  // update posts lists
    },
    [findPostsThunk.rejected]: (state, action) => {
      state.loading = false
    },
    // Delete post
    [deletePostsThunk.fulfilled]: (state, action) => {
      state.loading = false
      state.posts = state.posts.filter(p => p._id !== action.payload)
    },
    // Create post
    [createPostThunk.fulfilled]:
      (state, action) => {
        state.loading = false
        state.posts.push(action.payload)
      },
    // Update post
    [updatePostThunk.fulfilled]:
      (state, action) => {
        state.loading = false
        const postIndex = state.posts.findIndex((p) => p._id === action.payload._id)
        state.posts[postIndex] = {
          ...state.posts[postIndex],
          ...action.payload
        }
      },
    // Find posts by authors
    [findPostByAuthorThunk.fulfilled]: (state, action) => {  
      state.posts = action.payload
      state.loading = false
    }
  }
});

export const { createPost, updateLike } = postSlice.actions;

export default postSlice.reducer;