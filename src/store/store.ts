import { Action, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { MeState } from "./me/reducer";
import { rootReducer } from "./reducers";

export interface IPosts {
  kind: string;
  data: {
    title: string;
    author: string;
    created_utc: number;
    urlpreview: string;
    thumbnail: string;
    id: string;
    score: string;
    num_comments: number;
    media: {reddit_video: {fallback_url: string}};
    url: string;
    selftext: string;
  };
}

export interface IRepliesProps {
  [key: string]: { forAuthor: string; reply: string };
}
export interface ICommentForPost {
  [key: string]: { post: string; comment: string };
}
export type RootState = {
  posts: Array<IPosts>;
  commentForPost: ICommentForPost;
  commentsForReplies: IRepliesProps;
  token: string;
  me: MeState;
};

export const initialState: RootState = {
  posts: [],
  commentForPost: {},
  commentsForReplies: {},
  token: "",
  me: { loading: false, error: "", data: {} },
};

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<RootState, Action>)
  )
);
