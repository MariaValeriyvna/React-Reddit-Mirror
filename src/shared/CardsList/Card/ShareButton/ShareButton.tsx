import React from 'react';
import styles from './sharebutton.css'
import {Icon} from '../../../Icon/Icon'
import { EIcon } from '../../../../const/enumIcon';

export function ShareButton(): JSX.Element {
  return (
      <div className={styles.sharebutton}>
      <Icon icon={EIcon.share} size={20}/>
      </div>
  );
}