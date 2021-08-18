import IPostContextState from "../../interfaces/postContextState";
import IAction from "../../interfaces/action";
import PostActionTypes from "../types";

const postReducer = (state: IPostContextState, action: IAction) => {
    switch(action.type) {
        case PostActionTypes.GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                isLoading: false,
            }
        case PostActionTypes.SET_LOADING: 
            return {
                ...state,
                isLoading: true,
            }
        case PostActionTypes.GET_POST: 
            return {
                ...state,
                post: action.payload,
                isLoading: false,
            }
        case PostActionTypes.GET_COMMENTS: {
            return {
                ...state,
                comments: action.payload,
            }
        }        
        default:
            return state;
    }
}
export default postReducer;