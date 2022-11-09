import { createSlice } from "@reduxjs/toolkit";
import currentUser from "./current-user.json"

const profileSlice = createSlice({
    name: "posts",
    initialState: currentUser
});

export default profileSlice.reducer;