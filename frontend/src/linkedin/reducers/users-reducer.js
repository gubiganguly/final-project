import { createSlice } from "@reduxjs/toolkit";
import { registerThunk, findAllUsersThunk, updateCurrentUserThunk, profileThunk, logoutThunk, loginThunk, findUsersByNameThunk, findUserByIdThunk } from "../../services/users-thunks";

const initialState = {
    users: [],
    loading: false,
    currentUser: null,
    publicProfile: null
}


const userSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: {
        // find all users
        [findAllUsersThunk.fulfilled]: (state, action) => {
            state.users = action.payload
            state.loading = false
        },
        // register a user
        [registerThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
            state.loading = false
        },
        // login a user
        [loginThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
            state.loading = false
        },
        // logout a user
        [logoutThunk.fulfilled]: (state, action) => {
            state.currentUser = null
            state.loading = false
        },
        // update a user
        [updateCurrentUserThunk.fulfilled]: (state, action) => {
            state.currentUser = {
                ...state.currentUser,
                ...action.payload
            }
            state.loading = false
        },
        // get current a user
        [profileThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
            state.loading = false
        },
        // get users by name
        [findUsersByNameThunk.pending]: (state, action) => {
            state.users = []
            state.loading = true
        },
        [findUsersByNameThunk.fulfilled]: (state, action) => {
            state.users = action.payload
            state.loading = false
        },
        // get user by id
        [findUserByIdThunk.fulfilled]: (state, action) => {
            state.publicProfile = action.payload
            state.loading = false
        },
        [findUserByIdThunk.pending]: (state, action) => {
            state.publicProfile = null
            state.loading = true
        },

    }
});


export default userSlice.reducer; 