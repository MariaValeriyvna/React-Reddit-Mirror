import React from 'react';
import { User } from '../User/User';
import { TimeComment } from '../TimeComment/TimeComment';
import styles from './textcomponent.css';
import { Text } from '../../../Text/Text';
interface ITextComponentkProps {
  title: string;
  author: string;
  created_utc: number;
}

export function TextComponent({
  title,
  author,
  created_utc,
}: ITextComponentkProps) {
  if (title.length > 70) title = title.substring(0, 64) + '...';
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <User author={author} />
        <TimeComment created_utc={created_utc} />
      </div>
      <Text As={'h2'} size={20} mobileSize={16} marginTB={7}>
        <a href="#user-url" className={styles.postLink}>
          {title}{' '}
        </a>
      </Text>
    </div>
  );
}
