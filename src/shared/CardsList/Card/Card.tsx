import React from 'react';

import styles from './card.css';
import {TextComponent} from './TextComponent/TextComponent';
import {CardMenu} from './CardMenu/CardMenu';
import {Controls} from './Controls/Controls';
import {Preview} from './Preview/Preview'

export function Card() {
  return (
    <li className={styles.card}>
      <TextComponent />
      <Preview />
      <CardMenu />
      <Controls />
    </li>
  );
}
