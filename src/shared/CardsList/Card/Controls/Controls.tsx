import React from 'react';
import styles from './controls.css';
import { CarmaCounter } from '../CarmaCounter/CarmaCounter';
import { CommentsNumber } from '../CommentsNumber/CommentsNumber';
import { ShareButton } from '../ShareButton/ShareButton';
import { SaveButton } from '../SaveButton';
export interface ITitleData {
  score: string;
  num_comments: number;
}

export function Controls({ score, num_comments }: ITitleData): JSX.Element {
  return (
    <div className={styles.controls}>
      <CarmaCounter score={score} />
      <CommentsNumber num_comments={num_comments} />
      <div className={styles.actions}>
        <ShareButton />
        <SaveButton />
      </div>
    </div>
  );
}
