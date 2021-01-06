import React from 'react';
import { User } from '../User/User';
import { TimeComment } from '../TimeComment/TimeComment';
import styles from './textcomponent.css';
import { useState } from 'react';
import { Post } from '../../../Post';

interface ITextComponentkProps {
  title: string;
  author: string;
  created_utc: number;
  titleShort?: boolean;
  id: string;
  urlpreview: string;
  score: string;
  num_comments: number;
}

export function TextComponent({
  title,
  author,
  created_utc,
  titleShort = true,
  id,
  urlpreview,
  score,
  num_comments,
}: ITextComponentkProps): JSX.Element {
  const [isModalOpened, SetIsModalOpened] = useState(false);

  const titleMod =
    title.length > 70 && titleShort ? title.substring(0, 64) + '... ' : title;

  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <User author={author} />
        <TimeComment created_utc={created_utc} />
      </div>
      <button
        className={styles.postLink}
        onClick={() => {
          SetIsModalOpened(true);
        }}
      >
        {titleMod}
      </button>
      {isModalOpened && (
        <Post
          urlpreview={urlpreview}
          id={id}
          title={title}
          author={author}
          created_utc={created_utc}
          onClose={() => SetIsModalOpened(false)}
          score={score}
          num_comments={num_comments}
        />
      )}
    </div>
  );
}
