import React from 'react';
import { CommentItem } from './CommentItem';
import styles from './commentslist.css';

interface IComments {
  comments: Array<ICommentListData>;
  forauthor: string;
}

interface ICommentListData {
  data: ISimplCommentListData;
}
interface ISimplCommentListData {
  author: string;
  body: string;
  created_utc: number;
  id: string;
  subreddit: string;
  replies?: IRepliesProps;
}
interface IRepliesProps {
  data: IChildrenProps;
}

interface IChildrenProps {
  children: Array<ICommentListData>;
}

export function CommentsList({ comments, forauthor }: IComments): JSX.Element {
  return (
    <ul className={styles.commentsList} key={forauthor}>
      {comments.map((comment) => {
        if (!comment.data.body) return null;

        return (
          <li className={styles.item} key={comment.data.id}>
            <CommentItem
              created_utc={comment.data.created_utc}
              subreddit={comment.data.subreddit}
              author={comment.data.author}
              body={comment.data.body}
              id={comment.data.id}
              replies={comment.data.replies}
            />
          </li>
        );
      })}
    </ul>
  );
}
