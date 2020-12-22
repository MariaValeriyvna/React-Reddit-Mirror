import React, { useEffect, useRef, useState } from 'react';
import { MouseEvent } from 'react';
import { merge } from '../../../utils/js/merge';
import { generateId } from '../../../utils/react/generateRandomIndex';
import { TimeComment } from '../../CardsList/Card/TimeComment';
import { User } from '../../CardsList/Card/User';
import { CommentForm } from '../../CommentForm';
import { DropDown } from '../../DropDown';
import { GenericList } from '../../GenericList';
import { CommentIcon, ShareIcon, ComplainIcon } from '../../Icons';
import styles from './commentitem.css';

interface ISimplCommentItemData {
  author: string;
  body: string;
  created_utc: number;
  id: string;
  subreddit: string;
  openReply?: boolean;
}

export function CommentItem({
  created_utc,
  subreddit,
  author,
  body,
  openReply = true,
  id
}: ISimplCommentItemData) {
  const [openFormReply, setOpenFormReply]=useState(openReply)
  const result = Math.ceil(
    Math.ceil(Math.abs(new Date().getTime() - created_utc * 1000)) /
      (1000 * 60 * 60)
  );

  let handleItemClick = () => {
    console.log('klik ответить', id)
    setOpenFormReply(!openReply)
  };
  const LIST = [
    {
      As: 'li' as const,
      text: 'Ответить',
      img: <CommentIcon />,
      onClick: handleItemClick,
    },
    { As: 'li' as const, text: 'Поделиться', img: <ShareIcon /> },
    { As: 'li' as const, text: 'Пожаловаться', img: <ComplainIcon /> },
  ].map(generateId);
  return (
    <div>
      <div>
        <div className={styles.itemtitle}>
          <div className={styles.titlesub}>{subreddit}</div>
          <div className={styles.itemtitle}>
            <TimeComment created_utc={result} />
            <User author={author} />
          </div>
        </div>
        <p className={styles.textcomment}>{body}</p>
        <ul className={styles.ulicons}>
          <GenericList underline={false} list={LIST.map(merge({}))} />
        </ul>
      </div>
      <div>
        <CommentForm id={id} placeHolder="" nameAthour={author} isOpen={openReply}/>
      </div>
    </div>
  );
}
