import React, { useContext } from 'react';
import styles from './cardslist.css';
import { postsContext } from '../Context/postsContext';
import { Card } from './Card/Card';

export function CardsList(): JSX.Element {
  const posts = useContext(postsContext);

  return (
    <ul className={styles.cardsList}>
      {posts.map((post, index) => {
        let urlpreview: string;
        if (post.data.thumbnail === undefined) urlpreview = '';
        else urlpreview = post.data.thumbnail;
        const result = Math.ceil(
          Math.ceil(
            Math.abs(new Date().getTime() - post.data.created_utc * 1000)
          ) /
            (1000 * 60 * 60)
        );
        const author = post.data.author;
        return (
          <li className={styles.cardLi} key={index}>
            <Card
              id={post.data.id}
              title={post.data.title}
              author={author}
              created_utc={result}
              urlpreview={urlpreview}
              score={post.data.score}
              num_comments={post.data.num_comments}
            />
          </li>
        );
      })}
    </ul>
  );
}
