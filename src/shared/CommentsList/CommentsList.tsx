import React, { useEffect, useRef, useState } from 'react';
import { use } from 'vue/types/umd';
import { BtnDown } from '../BtnDown';
import { BtnUp } from '../BtnUp';
import { CommentForm } from '../CommentForm';
import { CommentItem } from './CommentItem';
import styles from './commentslist.css';

interface IComments {
  comments: Array<ICommentListData>;
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

export function CommentsList({ comments }: IComments) {
  
  return (
    <ul className={styles.commentsList}>
      {comments.map((comment, index) => {
        const [openReplies, setOpenReplies] = useState(false)
        if (comment.data.body)
          return (
            <li className={styles.item} key={comment.data.id}>
              <div className={styles.controls}>
                <BtnUp click={() => setOpenReplies(false)}/>
                <BtnDown click={() => setOpenReplies(true)}/>
              </div>
              <CommentItem
                created_utc={comment.data.created_utc}
                subreddit={comment.data.subreddit}
                author={comment.data.author}
                body={comment.data.body}
                id={comment.data.id}
              />
              {openReplies &&
                <ul className={styles.commentsList}>
                  {comment.data.replies &&
                    comment.data.replies.data.children.length > 0 &&
                    comment.data.replies.data.children.map((child, index) => {
                      if (child.data.body)
                        return (
                          <li className={styles.replies} key={index}>
                            <div className={styles.controls}>
                              <BtnUp />
                              <BtnDown />
                            </div>
                            <CommentItem
                              created_utc={child.data.created_utc}
                              subreddit={child.data.subreddit}
                              author={child.data.author}
                              body={child.data.body}
                              id={child.data.id}
                              
                            />
                          </li>
                        );
                    })}
                </ul>
              }
            </li>
          );
      })}
    </ul>
  );
}
