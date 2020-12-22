import React from 'react';
import styles from './timecomment.css';
interface ITimeProps {
  created_utc: number;
}

export function TimeComment({ created_utc }: ITimeProps) {

  return (
    <>
      {created_utc < 60 && (
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          {created_utc} {created_utc == 1 && 'минута'}
          {created_utc > 1 && created_utc < 5 && 'минуты'}{' '}
          {created_utc > 4 && 'минут'} назад
        </span>
      )}
      {created_utc > 60 && created_utc < 360 && (
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          {created_utc / 60} часа {created_utc % 60} минуты назад
        </span>
      )}
    </>
  );
}
