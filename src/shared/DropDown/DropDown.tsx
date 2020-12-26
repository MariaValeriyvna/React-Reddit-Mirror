import React, {useEffect, useState} from 'react';
import styles from './dropdown.css';

interface IDropDownProps {
  button?: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: ()=> void;
}
const NOOP = () => {};

export function DropDown({button, children, isOpen, onClose=NOOP, onOpen=NOOP}: IDropDownProps):JSX.Element {
  const [isDropDownOpen, setIsDropDownOpen] = useState(isOpen);
  useEffect(()=> setIsDropDownOpen(isOpen), [isOpen]);//когда меняется св-во isOpen, хук useEffect устанавливает новое состояние
  useEffect(()=> isDropDownOpen ? onOpen() : onClose(), [isDropDownOpen]);//когда меняется св-во isDropDownOpen, хук useEffect устанавливает новое состояние
  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropDownOpen (!isDropDownOpen)
    }
  }
  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>
        {button}
      </div>
      {isDropDownOpen && (
        <div className={styles.listContainer}>
          <div className = {styles.list} onClick={()=> setIsDropDownOpen(false)}>
            {children}
          </div>

        </div>
      )}
    </div>
  );
}
