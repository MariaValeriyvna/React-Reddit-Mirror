import React from 'react';
import styles from './carmacounter.css';
import { DownIcon, UpIcon } from '../../../Icons';

export function CarmaCounter() {
  return (
    <div className={styles.karmaCounter}>
      <button className={styles.up}>
        <UpIcon />
      </button>
      <span className={styles.karmaValue}>256</span>
      <button className={styles.down}>
        <DownIcon />
      </button>
    </div>
  );
}
