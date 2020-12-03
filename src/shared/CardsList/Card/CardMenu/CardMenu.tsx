import React, {useState} from 'react';
import styles from './cardmenu.css';
import { DropDown } from '../../../DropDown/DropDown';
import { GenericList } from '../../../GenericList/GenericList';
import { merge } from '../../../../utils/js/merge';
import {
  generateId,
  generateRandomString,
} from '../../../../utils/react/generateRandomIndex';
import {
  MenuIcon,
  CommentIcon,
  ShareIcon,
  HideIcon,
  SaveIcon,
  ComplainIcon,
} from '../../../Icons';

const LIST = [
  { As: 'li' as const, text: 'Комментарии', img: <CommentIcon /> },
  { As: 'li' as const, text: 'Поделиться', img: <ShareIcon /> },
  { As: 'li' as const, text: 'Скрыть', img: <HideIcon /> },
  { As: 'li' as const, text: 'Сохранить', img: <SaveIcon /> },
  { As: 'li' as const, text: 'Пожаловаться', img: <ComplainIcon /> },
].map(generateId);

export function CardMenu() {
  const [list, setList] = useState(LIST);
  const handleItemClick = () => {
    setList(list);
  };

  return (
    <div className={styles.cardmenu}>
      <DropDown
        button={
          <button className={styles.cardmenuButton}>
            <MenuIcon />
          </button>
        }
      >
        <ul className={styles.cardmenulist}>
          <GenericList list={list.map(merge({ onClick: handleItemClick }))} />
        </ul>
        <button className={styles.btnClose}>Закрыть</button>
      </DropDown>
    </div>
  );
}
