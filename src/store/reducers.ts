import { AnyAction, Reducer } from 'redux';
import { GET_POSTS, SET_TOKEN, UPDATE_COMMENT, UPDATE_REPLY } from './actions';
import { ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from './me/actions';
import { meReducer } from './me/reducer';
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
        },
      };
    case UPDATE_REPLY:
      return {
        ...state,
        commentsForReplies: {
          ...state.commentsForReplies,
          [action.key]: { forAuthor: action.forAuthor, reply: action.reply },
        },
      };
      case GET_POSTS:
        return {
          ...state,
          posts: 
          [...state.posts].concat(action.posts)
        };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST:
    case ME_REQUEST_ERROR:
      return {
        ...state,
        me: meReducer(state.me, action),
      };
    default:
      return state;
  }
};
