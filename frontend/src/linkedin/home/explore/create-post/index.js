
import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import { BiTask } from 'react-icons/bi';
import "./index.css"
import { createPost } from "../../../reducers/post-reducer";
import {useDispatch} from "react-redux";

const CreatePost = () => {

    let [startPost, setStartPost] = useState('');
    let [postImage, setPostImage] = useState('')

    const dispatch = useDispatch()
    const postClickHandler = () => {
        const newPost = {
            caption: startPost,
            image: postImage
          }
          dispatch(createPost(newPost));
    }

    const imageClickHandler = () => {
        console.log("Upload image")
    }



    return (
        <div className="row mt-5 mb-3 ms-5 me-5"> 
            <div className="col-auto">
                <img className="rounded-circle" src="/images/profile.jpeg" width={60} />
            </div>
            <div className="col-10">
                <textarea value={startPost} placeholder="Start a post"
                    className="form-control border-1"
                    onChange={(event) => setStartPost(event.target.value)}>
                </textarea>
                <div>
                    <button className="post-button rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold border-0"
                        onClick={postClickHandler} style={{backgroundColor: "#222325"}}>
                        Post
                    </button>
                    <div className="row text-primary fs-2">
                        <button className="post-item col border-0 rounded-1">
                            <i className="fa-regular fa-image" style={{color: "#94D1F7"}}></i>
                        </button>
                        <button className="post-item col border-0 rounded-1">
                            <BiTask color="#AB6767"/>
                        </button>
                        <button className="post-item col border-0 rounded-1">
                            <i className="fa-regular fa-calendar-days" style={{color: "#F7ADAD"}}></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-12"><hr /></div>
        </div>
    );
}
export default CreatePost;