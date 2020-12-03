import React from 'react';
import styles from './card.css';
import 'react-hot-loader';
import {TextComponent} from './TextComponent/TextComponent';
import {CardMenu} from './CardMenu/CardMenu';
import {Controls} from './Controls/Controls';
import {Preview} from './Preview/Preview';
interface ICardProps {
 title:string;
 author:string;
 created_utc: number;
 url:string
}
export function Card({title, author, url, created_utc}:ICardProps) {
  return (
    <div className={styles.card}>  
      <TextComponent title={title} author={author} created_utc = {created_utc}/>
      <Preview url={url}/>
      <CardMenu />
      <Controls />
    </div>
  );
}
