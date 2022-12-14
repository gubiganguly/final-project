// Wrappers for the services so we can dump into reducer. Tells if request is fullfilled, pending or rejected
import { createAsyncThunk } from "@reduxjs/toolkit"
import * as service from "./posts-services"

// Returns all posts from server
export const findPostsThunk = createAsyncThunk(
    'findPostsThunk',
    async () => await service.findPosts()
)

// Deletes a posts from server
export const deletePostsThunk = createAsyncThunk(
    'deletePostsThunk',
    async (pid) => {
        await service.deletePost(pid)
        return pid
    } 
)

// Creates a post for server
export const createPostThunk = createAsyncThunk(
    'createPostsThunk',
    async (post) => 
        await service.createPost(post)
)

// Update post to server
export const updatePostThunk =
  createAsyncThunk(
    'updatePost',
    async (post) =>
      await service.updatePost(post)
)
 