import React from 'react';
import styles from './carmacounter.css';
import { BtnUp } from '../../../BtnUp';
import { BtnDown } from '../../../BtnDown';

export interface ITitleData {
  score: string;
}

export function CarmaCounter({score}:  ITitleData): JSX.Element {
  return (
    <div className={styles.karmaCounter}>
      <BtnUp state={true} />
      <span className={styles.karmaValue}>{score}</span>
        <BtnDown state={false}/>
    </div>
  );
}
