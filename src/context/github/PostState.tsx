import axios from "axios";
import React, { useReducer } from "react";
import IAction from "../../interfaces/action";
import postContextState from "../../interfaces/postContextState";
import IProviderProps from "../../interfaces/providerProps";
import PostActionTypes from "../types";
import GithubContext from "./postContext";
import postReducer from "./postReducer";


export const initialState: postContextState = {
    posts: [],
    post: null,
    comments: [],
    isLoading: false,
}

const PostsState = (props: IProviderProps)  => {
    const [state, dispatch] = useReducer<React.Reducer<postContextState, IAction>>(postReducer, initialState)
    

    //Get users
    const getPosts = async (): Promise<void> => {
        setLoader();
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const {data} = response;
        dispatch({
            type: PostActionTypes.GET_POSTS,
            payload: data,
        })
        
    }

    //Set loader
    const setLoader = () => {
        dispatch({
            type: PostActionTypes.SET_LOADING
        })
    }

    const getPost = async (id: number): Promise<void> => {
        setLoader();
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const {data} = response;
        dispatch({
            type: PostActionTypes.GET_POST,
            payload: data,
        })
    }

    const getComments = async (id: number): Promise<void> => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        const {data} = response;
        dispatch({
            type: PostActionTypes.GET_COMMENTS,
            payload: data,
        })
    }

    return (
        <>
        <GithubContext.Provider
            value={{
                posts: state.posts,
                post: state.post,
                comments: state.comments,
                isLoading: state.isLoading,
                getPosts: getPosts,
                getPost: getPost,
                getComments: getComments,
            }}>
            {props.children}
        </GithubContext.Provider>
        </>
        )

}

export default PostsState;
