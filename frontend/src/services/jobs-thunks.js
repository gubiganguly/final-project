import { createAsyncThunk } from "@reduxjs/toolkit"
import * as service from "./jobs-services"

export const findJobsBySearchTermThunk = createAsyncThunk(
    'findJobsBySearchTermThunk',
    async (term) => await service.findJobsBySearchTerm(term)
)