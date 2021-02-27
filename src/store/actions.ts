import { Action, ActionCreator, AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { IPostData } from "../hooks/usePostsData";
import { RootState } from "./store";

export const UPDATE_COMMENT = "UPDATE_COMMENT";
export const SET_TOKEN = "SET_TOKEN";
export const UPDATE_REPLY = "UPDATE_REPLY";
export const GET_POSTS = "GET POSTS";

export type SetToken = {
  type: typeof SET_TOKEN;
  token: string;
};

export const updateComment: ActionCreator<AnyAction> = (
  key,
  post,
  comment
) => ({
  type: UPDATE_COMMENT,
  key,
  post,
  comment,
});
export const updateReply: ActionCreator<AnyAction> = (
  key,
  forAuthor,
  reply
) => ({
  type: UPDATE_REPLY,
  key,
  forAuthor,
  reply,
});
export const setToken: ActionCreator<SetToken> = (token: string) => ({
  type: SET_TOKEN,
  token,
});

export const getPosts: ActionCreator<AnyAction> = (posts: Array<IPostData>) => ({
  type: GET_POSTS,
  posts,
});
export const saveToken = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => (dispatch) => {
  if (window.__token__ !== "undefined")
    localStorage.setItem("tokenReddit", window.__token__);
  dispatch(setToken(localStorage.getItem("tokenReddit")));
};
