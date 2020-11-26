import React from 'react';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';
import {SearchIcon} from '../../Icons/SearchIcon'

export function SearchBlock() {
  return (
    <div className={styles.searchblock}>
      <UserBlock />
      <div className={styles.blockinput}>
      <button className={styles.btnsearch} aria-label="Поиск">
        <SearchIcon />
      </button>
      <input className={styles.searchinput} placeholder='Поиск'/>
      </div>
    </div>

  );
}
