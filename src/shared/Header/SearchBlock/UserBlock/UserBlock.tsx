import * as React from 'react';
import { EIcon } from '../../../../const/enumIcon';
import { Icon } from '../../../Icon';
import styles from './userblock.css';
interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
  loading: boolean;
}
export function UserBlock({
  avatarSrc,
  username = 'Аноним',
  loading,
}: IUserBlockProps): JSX.Element {
  return (
    <div>
      
      <a
        className={styles.userblock}
        href="https://www.reddit.com/api/v1/authorize?client_id=iYguATByxd-5PA&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
      >
        <div className={styles.photo}>
          {avatarSrc ? (
            <img className={styles.avatar} src={avatarSrc} alt="user avatar" />
          ) : (
            <Icon As={'div'} icon={EIcon.anonim} size={50} mobileSize={30} />
          )}
        </div>

        <div className={styles.name}>
          {loading ? 'Загрузка...' : `${username}`}
        </div>
      </a>
    </div>
  );
}
