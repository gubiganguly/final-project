import { createSlice } from "@reduxjs/toolkit";
import { findJobsBySearchTermThunk } from "../../services/jobs-thunks";

const initialState = {
    jobs: [],
    loading: false,
    jobProfile: null
}

const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    extraReducers: {
        // find jobs by search
        [findJobsBySearchTermThunk.pending]: (state, action) => {
            state.jobs = action.payload
            state.loading = true
        },
        [findJobsBySearchTermThunk.fulfilled]: (state, action) => {
            state.jobs = action.payload.results
            state.loading = false
        },
    }
});

export default jobsSlice.reducer; 