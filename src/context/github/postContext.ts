import { createContext } from "react";
import IGithubUserState from "../../interfaces/postContextState";
import { initialState } from "./PostState";

const githubContext = createContext<IGithubUserState>(initialState);

export default githubContext;