import React from 'react';
import styles from './commentsnumber.css';
import {CommentIcon} from '../../../Icons/CommentIcon';
interface INumProps {
  num_comments: number
}
export function CommentsNumber({num_comments}: INumProps): JSX.Element {
  return (
<button className={styles.commentsButton}>
     <CommentIcon />
        <span className={styles.commentsNumber}>{num_comments}</span>
      </button>
  );
}
