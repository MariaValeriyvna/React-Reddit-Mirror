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
 urlpreview:string;
 id: string;
 score: string
}
export function Card({title, author, urlpreview, created_utc, id, score}:ICardProps) {
  return (
    <div className={styles.card}>  
      <TextComponent urlpreview={urlpreview} id={id} title={title} author={author} created_utc = {created_utc} score={score}/>
      <Preview url={urlpreview}/>
      <CardMenu />
      <Controls score={score}/>
    </div>
  );
}
