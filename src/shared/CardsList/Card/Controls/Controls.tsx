import React from 'react';
import styles from './controls.css';
import { CarmaCounter } from '../CarmaCounter/CarmaCounter';
import { CommentsNumber } from '../CommentsNumber/CommentsNumber';
import { ShareButton } from '../ShareButton/ShareButton';
import { SaveButton } from '../SaveButton';
export function Controls() {
  return (
    <div className={styles.controls}>
      <CarmaCounter />
      <CommentsNumber />
      <div className={styles.actions}>
        <ShareButton />
        <SaveButton />
      </div>
    </div>
  );
}
