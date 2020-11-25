import React from 'react';
import { User } from '../User/User';
import { TimeComment } from '../TimeComment/TimeComment';
import styles from './textcomponent.css';
import { Text } from '../../../Text/Text';

export function TextComponent() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <User />
        <TimeComment />
      </div>
      <Text As={'h2'} size={20} mobileSize={16} marginTB={7}>
        <a href="#user-url" className={styles.postLink}>
          Реализация намеченных плановых заданий
        </a>
      </Text>
    </div>
  );
}
