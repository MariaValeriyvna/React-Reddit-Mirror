import { ActionCreator, AnyAction } from 'redux';

export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const SET_TOKEN = 'SET_TOKEN';
export const UPDATE_REPLY = 'UPDATE_REPLY';
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
export const setToken: ActionCreator<AnyAction> = (token) => ({
  type: SET_TOKEN,
  token,
});
