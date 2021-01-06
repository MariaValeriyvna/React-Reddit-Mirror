import React, { useContext } from 'react';
import styles from './searchblock.css';
import { userContext } from '../../Context/userContext';
import { SearchIcon } from '../../Icons/SearchIcon';
import { UserBlock } from './UserBlock';

export function SearchBlock(): JSX.Element {
  const { data, loading = false } = useContext(userContext);
  return (
    <div className={styles.searchblock}>
      <UserBlock
        avatarSrc={data?.iconImg}
        username={data?.name}
        loading={loading}
      />
      <div className={styles.blockinput}>
        <button className={styles.btnsearch} aria-label="Поиск">
          <SearchIcon />
        </button>
        <input className={styles.searchinput} placeholder="Поиск" />
      </div>
    </div>
  );
}
