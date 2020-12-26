import React from 'react';
import styles from './savebtn.css'
import {Icon} from '../../../Icon/Icon'
import { EIcon } from '../../../../const/enumIcon';

export function SaveButton(): JSX.Element {
  return (
    <div className={styles.savebtn}>
      <Icon icon={EIcon.save} size={20}/>
      </div>
  );
}
