//рендериит любые списки
import React from 'react';
import styles from './GenericList.css';
interface IItem {
  id: string;
  img?: JSX.Element;
  text?: string;
  onClick?: (id: string, key: number) => void;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
  key?: number;
}
interface IGenericListProps {
  list: IItem[];
  underline?: boolean;
}
const noop = () => {
  null;
};
export function GenericList({
  list,
  underline = true,
}: IGenericListProps): JSX.Element {
  const liStyle = underline
    ? { border: '1px solid #ececec' }
    : { border: 'none' };

  return (
    <>
      {list.map(
        ({ As = 'div', img, text, onClick = noop, id, href }, index) => (
          <As
            style={liStyle}
            className={styles.item}
            onClick={() => onClick(id, index)}
            key={index}
            id={id}
            href={href}
          >
            {img}
            {text}
          </As>
        )
      )}
    </>
  );
}
