import React, { useContext } from 'react';
import styles from './cardslist.css';
import { postsContext } from '../Context/postsContext';
import { Card } from './Card/Card';

export function CardsList() {
  const posts = useContext(postsContext);
  
  return (
    <ul className={styles.cardsList}>
      {posts.map((post, index) => {
        let urlprew:string;
        if (post.data.thumbnail === undefined) urlprew = '';
        else urlprew = post.data.thumbnail;
        const result = Math.ceil((Math.ceil(Math.abs(new Date().getTime() - post.data.created_utc*1000)))/(1000*60*60)
        )
        let author = post.data.author
        return (
          <li key={index}>
            <Card title={post.data.title} author={author} created_utc={result} url={urlprew} />
          </li>
        );
      })}
    </ul>
  );
}
