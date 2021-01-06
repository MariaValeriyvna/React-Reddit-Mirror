import React from 'react';
import { UpIcon } from '../Icons';
import styles from './btnup.css';
interface IClick {
  click?: () => void;
  state?: boolean;
}
export function BtnUp({ click, state }: IClick): JSX.Element {
  return (
    <button className={state ? styles.up : styles.up_disable} onClick={click}>
      <UpIcon />
    </button>
  );
}
