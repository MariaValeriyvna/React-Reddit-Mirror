import React from 'react';
import { UpIcon } from '../Icons';
import styles from './btnup.css';
interface IClick {
  click?: ()=>void
}
export function BtnUp({click}: IClick) {
  return (
      <button className={styles.up} onClick={click}>
        <UpIcon />
      </button>
  );
}
