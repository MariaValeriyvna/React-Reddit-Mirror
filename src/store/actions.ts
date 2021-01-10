import { Action, ActionCreator, AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from './store';

export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const SET_TOKEN = 'SET_TOKEN';
export const UPDATE_REPLY = 'UPDATE_REPLY';

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


export const saveToken= (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => (dispatch, getState) => {
  if (window.__token__)
  dispatch(setToken(window.__token__));
}