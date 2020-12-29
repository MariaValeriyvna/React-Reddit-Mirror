import { AnyAction, Reducer } from 'redux';
import { SET_TOKEN, UPDATE_COMMENT, UPDATE_REPLY } from './actions';
import { initialState, RootState } from './store';

export const rootReducer: Reducer<RootState, AnyAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentForPost: {
          ...state.commentForPost,
          [action.key]: { post: action.post, comment: action.comment },
          }
      };
    case UPDATE_REPLY:
        return {
          ...state,
          commentsForReplies: {
            ...state.commentsForReplies,
            [action.key]: { forAuthor: action.forAuthor, reply: action.reply },
            }
        };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
};
