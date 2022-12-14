import { createAsyncThunk } from "@reduxjs/toolkit"
import * as service from "./jobs-services"

export const findJobsThunk = createAsyncThunk(
    'findJobsThunk',
    async () => await service.findJobs()
)