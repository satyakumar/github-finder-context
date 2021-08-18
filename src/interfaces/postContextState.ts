import IComment from "./comment";
import IPost from "./post";

export default interface IPostContextState {
    posts: IPost[];
    post: null | IPost;
    comments: [] | IComment[];
    isLoading: boolean;
    getPosts?(): void;
    getPost?(id: number): void; 
    getComments?(id: number): void;
}