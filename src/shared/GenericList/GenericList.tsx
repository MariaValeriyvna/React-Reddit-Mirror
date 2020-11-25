//рендериит любые списки
import React from 'react';
import styles from './GenericList.css';
interface IItem {
  id: string;
  img?: object;
  text: string;
  onClick: (id: string) => void;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}
interface IGenericListProps {
  list: IItem[];
}

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(({ As = 'div', img, text, onClick, id, href }) => (
        <As
          className={styles.item}
          onClick={() => onClick(id)}
          key={id}
          href={href}
          
        >
          {img}
          {text} 
        </As>
      ))}
    </>
  );
}
