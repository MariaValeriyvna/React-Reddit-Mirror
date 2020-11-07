import React from 'react';
import styles from './user.css';
import photo from './user.png';

export function User() {
  return (
    <div className={styles.userLink}>
    <img className={styles.avatar} src={photo} />
    <a href="#user-url" className={styles.username}>
      Дмитрий Гришин
    </a>
  </div>
  );
}
