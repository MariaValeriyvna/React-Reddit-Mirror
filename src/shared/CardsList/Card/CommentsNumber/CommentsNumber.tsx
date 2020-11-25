import React from 'react';
import styles from './commentsnumber.css';
import {CommentIcon} from '../../../Icons/CommentIcon';

export function CommentsNumber() {
  return (
<button className={styles.commentsButton}>
     <CommentIcon />
        <span className={styles.commentsNumber}>27</span>
      </button>
  );
}
