import React from 'react';
import styles from './card.css';
import 'react-hot-loader';
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
