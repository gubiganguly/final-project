import axios from "axios";

const api = axios.create({withCredentials: true}) // set up axios for cookies
const BASE_API_URL = 'http://localhost:4000'
const USERS_API = 'http://localhost:4000/api/users';

export const findAllUsers = async () => {
    const response = await api.get(USERS_API)
    return response.data
}

export const findUserById = async (uid) => {
    const response = await api.get(`${USERS_API}/${uid}`)
    return response.data
}

export const register = async (user) => {
    const response = await api.post(`${BASE_API_URL}/register`, user)
    return response.data
}

export const login = async (cred) => {
    const response = await api.post(`${BASE_API_URL}/login`, cred)
    return response.data
}

export const logout = async () => {
    const response = await api.post(`${BASE_API_URL}/logout`)
    return response.data
}

export const profile = async () => {
    const response = await api.post(`${BASE_API_URL}/profile`)
    return response.data
}

export const updateCurrentUser = async (update) => {
    const response = await api.put(`${BASE_API_URL}/update`, update)
    return response.data
}

export const findUsersByName = async (name) => {
    const response = await api.get(`${USERS_API}/name/${name}`)
    return response.data
}

export const updateUser = async (uid, update) => {
    const response = await api.put(`${USERS_API}/${uid}`, update)
    return response.data
} 
 
  