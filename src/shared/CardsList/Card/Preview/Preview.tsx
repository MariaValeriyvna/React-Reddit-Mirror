import React from 'react';
import styles from './preview.css';
import prew from './Postprew.png';

export function Preview() {
  return (
    <div className={styles.preview}>
    <img className={styles.previewImg} src={prew} />
    </div>
  );
}
