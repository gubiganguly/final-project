import { createAsyncThunk } from "@reduxjs/toolkit"
import * as service from "./users-services"


export const findAllUsersThunk = createAsyncThunk(
    'findAllUsers',
    async () => 
        await service.findAllUsers()
)

export const findUserByIdThunk = createAsyncThunk(
    'findUserById',
    async (uid) => 
        await service.findUserById(uid)
)

export const registerThunk = createAsyncThunk(
    'register',
    async (user) => 
        await service.register(user)
)

export const loginThunk = createAsyncThunk(
    'login',
    async (user) => 
        await service.login(user)
)

export const logoutThunk = createAsyncThunk(
    'logout',
    async () => 
        await service.logout()
)

export const updateCurrentUserThunk = createAsyncThunk(
    'updateCurrentUser',
    async (update) => 
        await service.updateCurrentUser(update)
)

export const profileThunk = createAsyncThunk(
    'profile',
    async () => 
        await service.profile()
)

export const findUsersByNameThunk = createAsyncThunk(
    'findUserByName',
    async (name) => 
        await service.findUsersByName(name)
)

export const updateUserThunk = createAsyncThunk(
    'updateUser',
    async (uid, update) => 
        await service.updateUser(uid, update)
)


 