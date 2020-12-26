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
 score: string;
 num_comments: number
}
export function Card({title, author, urlpreview, created_utc, id, score, num_comments}:ICardProps): JSX.Element {
  return (
    <div className={styles.card}>  
      <TextComponent urlpreview={urlpreview} id={id} title={title} author={author} created_utc = {created_utc} score={score} num_comments={num_comments}/>
      <Preview url={urlpreview}/>
      <CardMenu />
      <Controls score={score} num_comments={num_comments}/>
    </div>
  );
}
