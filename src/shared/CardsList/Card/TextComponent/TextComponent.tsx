import React from 'react';
import {User} from '../User/User'
import {TimeComment} from '../TimeComment/TimeComment'
import styles from './textcomponent.css';

export function TextComponent() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <User />
        <TimeComment />
      </div>

      <h2 className={styles.title}>
        <a href="#user-url" className={styles.postLink}>
          Реализация намеченных плановых заданий
        </a>
      </h2>
    </div>
  );
}
