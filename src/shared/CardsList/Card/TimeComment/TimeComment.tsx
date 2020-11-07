import React from 'react';
import styles from './timecomment.css';

export function TimeComment() {
  return (
    <span className={styles.createdAt}>
      <span className={styles.publishedLabel}>опубликовано</span> 4 часа назад
    </span>
  );
}
