import React from 'react';
import styles from './cardmenu.css';
import { DropDown } from '../../../DropDown/DropDown';
import { GenericList } from '../../../GenericList/GenericList';
import { merge } from '../../../../utils/js/merge';
import { generateId, generateRandomString} from '../../../../utils/react/generateRandomIndex';
import comment from '../../../../img/comments.svg';
import share from '../../../../img/share.svg';
import none from '../../../../img/none.svg';
import save from '../../../../img/save.svg';
import complain from '../../../../img/complain.svg';

const LIST = [
  { As: 'li' as const, text: 'Комментарии', img: comment },
  { As: 'li' as const, text: 'Поделиться', img: share },
  { As: 'li' as const, text: 'Скрыть', img: none },
  { As: 'li' as const, text: 'Сохранить', img: save },
  { As: 'li' as const, text: 'Пожаловаться', img: complain },
].map(generateId);

export function CardMenu() {
  const [list, setList] = React.useState(LIST);
  const handleItemClick = (id: string) => {
    setList(list);
  };

  return (
    <div className={styles.cardmenu}>
      
      <DropDown
        button={
          <button className={styles.cardmenuButton}>
            <svg
              width="5"
              height="20"
              viewBox="0 0 5 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2.5" cy="2.5" r="2.5" fill="#F3F3F3" />
              <circle cx="2.5" cy="10" r="2.5" fill="#F3F3F3" />
              <circle cx="2.5" cy="17.5" r="2.5" fill="#F3F3F3" />
            </svg>
          </button>
        }
      >
        <ul>
          <GenericList list={list.map(merge({ onClick: handleItemClick }))} />
        </ul>
        <button className={styles.btnClose}>Закрыть</button>
      </DropDown>
    </div>
  );
}
