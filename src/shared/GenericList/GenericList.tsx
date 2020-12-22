//рендериит любые списки
import React from 'react';
import styles from './GenericList.css';
interface IItem {
  id: string;
  img?: object;
  text?: string;
  onClick?: (id:string) => void;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}
interface IGenericListProps {
  list: IItem[];
  underline?: boolean;
  
}
const noop = ()=>{}
export function GenericList({ list , underline=true}: IGenericListProps) {

  const liStyle =  (underline) ? {'border': '1px solid #ececec'} : {'border': 'none'}

  return (
    <>
      {list.map(({ As = 'div', img, text, onClick=noop, id, href }) => (
        <As
          style={liStyle}
          className={styles.item}
          onClick={()=>onClick(id)}
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
