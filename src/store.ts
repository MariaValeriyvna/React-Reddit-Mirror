import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { rootReducer } from "./reducers"


export interface IRepliesProps {
  [key: string]:{ forAuthor: string, reply: string}
}
export interface ICommentForPost {
  [key: string]:{ post: string, comment: string}
}
export type RootState = {
  commentForPost: ICommentForPost
  commentsForReplies: IRepliesProps
  token: string
}

export const initialState: RootState= {
  commentForPost: {},
  commentsForReplies: {},
  token: ''
}

export  const store = createStore(rootReducer,composeWithDevTools())

