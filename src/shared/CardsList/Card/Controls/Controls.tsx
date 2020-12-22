import React from 'react';
import styles from './controls.css';
import { CarmaCounter } from '../CarmaCounter/CarmaCounter';
import { CommentsNumber } from '../CommentsNumber/CommentsNumber';
import { ShareButton } from '../ShareButton/ShareButton';
import { SaveButton } from '../SaveButton';
export interface ITitleData {
  score: string;
}

export function Controls({score}: ITitleData) {
  return (
    <div className={styles.controls}>
      <CarmaCounter score = {score}/>
      <CommentsNumber />
      <div className={styles.actions}>
        <ShareButton />
        <SaveButton />
      </div>
    </div>
  );
}
