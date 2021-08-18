import PostActionTypes from "../context/types";

export default interface IAction {
    type: PostActionTypes
    payload?: any;
}