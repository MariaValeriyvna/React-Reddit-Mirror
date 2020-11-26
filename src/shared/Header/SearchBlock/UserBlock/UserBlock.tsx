import React from 'react';
import { EColor } from '../../../../const/enumColor';
import { EIcon } from '../../../../const/enumIcon';
import { Icon } from '../../../Icon';
import { Text } from '../../../Text';
import styles from './userblock.css';

export function UserBlock() {
  return (
    <div className={styles.userblock}>
      <a className={styles.photo} href="https://www.reddit.com/api/v1/authorize?client_id=iYguATByxd-5PA&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity">
        <Icon As={'div'} icon={EIcon.anonim} size={50} mobileSize={30} />
      </a>
      <div className={styles.name}>
        <Text size={20} bold={500} color={EColor.orange}>Аноним</Text>
      </div>
    </div>
  );
}
