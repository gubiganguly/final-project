import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileThunk } from "../services/users-thunks";


// loads the profile of current user from server
const CurrentUser = ({children}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(profileThunk())
    }, [])

    return (children) 
}

export default CurrentUser