import React from 'react';
import styles from './user.css';
import { RedditIcon } from '../../../Icons';
import { useUserAvatar } from '../../../../hooks/useUserAvatar';

interface IUserProps {
  author: string;
}
export function User({ author }: IUserProps) {
  const data = useUserAvatar({ author });

  return (
    <div className={styles.userLink}>
      {data.avatar ? (
        <img className={styles.avatar} src={data.avatar} />
      ) : (
        <RedditIcon size={'20px'} />
      )}
      <a href="#user-url" className={styles.username}>
        {data.user}
      </a>
    </div>
  );
}
