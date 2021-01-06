import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { MeState } from './me/reducer';
import { rootReducer } from './reducers';

export interface IRepliesProps {
  [key: string]: { forAuthor: string; reply: string };
}
export interface ICommentForPost {
  [key: string]: { post: string; comment: string };
}
export type RootState = {
  commentForPost: ICommentForPost;
  commentsForReplies: IRepliesProps;
  token: string;
  me: MeState;
};

export const initialState: RootState = {
  commentForPost: {},
  commentsForReplies: {},
  token: '',
  me: { loading: false, error: '', data: {} },
};

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
