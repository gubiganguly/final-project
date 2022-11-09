import { createSlice } from "@reduxjs/toolkit";
import postArray from "./posts.json";


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
    initialState: postArray,
    reducers: {
        createPost(state, action) {
          state.unshift({
            ...action.payload,
            ...templatePost,
            _id: (new Date()).getTime(),
          })
        },
        updateLike(state, action) {
            const post = state.find((post) => post._id === action.payload)
            post.liked = !post.liked
          }
      }
});

export const {createPost, updateLike} = postSlice.actions;

export default postSlice.reducer;