import React from 'react';
import { DownIcon } from '../Icons';
import styles from './btndown.css';
interface IClick {
  click?: ()=>void
}
export function BtnDown({click}: IClick) {
  return (
      <button className={styles.down} onClick={click}>
        <DownIcon />
      </button>
  );
}