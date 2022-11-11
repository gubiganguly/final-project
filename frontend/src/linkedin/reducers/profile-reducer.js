import { createSlice } from "@reduxjs/toolkit";
import currentUser from "./current-user.json"

const profileSlice = createSlice({
    name: "currentUser",
    initialState: currentUser,
    reducers: {
        updateProfile(state, action) {
            state = {
                ...state,
                ...action.payload
            }
        }
    }
});

export const {updateProfile} = profileSlice.actions;

export default profileSlice.reducer; 