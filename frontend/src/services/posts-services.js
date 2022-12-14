// Functions to interact with server
import axios from 'axios'

const POSTS_API = 'http://localhost:4000/api/posts';

// Get all posts from server
export const findPosts = async () => {
    const response = await axios.get(POSTS_API);
    return response.data;
}

// Delete post from server based on pid
export const deletePost = async (pid) => {
    const response = await axios.delete(`${POSTS_API}/${pid}`)
    return response.data
}

// Create post and send to server
export const createPost = async (post) => {
    const response = await axios.post(POSTS_API, post)
    return response.data
}

// Send update to server
export const updatePost = async (post) => {
    await axios.put(`${POSTS_API}/${post._id}`, post);
    return post;
}

 