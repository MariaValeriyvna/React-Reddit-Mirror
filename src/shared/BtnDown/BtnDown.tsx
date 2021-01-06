import React from 'react';
import { DownIcon } from '../Icons';
import styles from './btndown.css';
interface IClick {
  click?: () => void;
  state?: boolean;
}
export function BtnDown({ click, state }: IClick): JSX.Element {
  return (
    <button
      className={state ? styles.down_disable : styles.down}
      onClick={click}
    >
      <DownIcon />
    </button>
  );
}
