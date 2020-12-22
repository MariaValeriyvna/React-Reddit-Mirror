import React, { ChangeEvent, FormEvent, useEffect } from 'react';
import { useContext } from 'react';
import { merge } from '../../utils/js/merge';
import { generateId } from '../../utils/react/generateRandomIndex';
import { commentContext } from '../Context/commentContext';
import { GenericList } from '../GenericList';
import {
  Copyicon,
  Tagicon,
  Imgicon,
  SaveCommenticon,
  Personicon,
  Renewicon,
  Microphoneicon,
  Linkicon,
  Commentsicon,
  Penicon,
  Lettericon,
  Pdficon,
} from '../Icons';
import styles from './commentform.css';
const list = [
  { As: 'li' as const, img: <Tagicon /> },
  { As: 'li' as const, img: <Copyicon /> },
  { As: 'li' as const, img: <Imgicon /> },
  { As: 'li' as const, img: <SaveCommenticon /> },
  { As: 'li' as const, img: <Personicon /> },
  { As: 'li' as const, img: <Personicon /> },
  { As: 'li' as const, img: <Renewicon /> },
  { As: 'li' as const, img: <Linkicon /> },
  { As: 'li' as const, img: <Microphoneicon /> },
  { As: 'li' as const, img: <Commentsicon /> },
  { As: 'li' as const, img: <Penicon /> },
  { As: 'li' as const, img: <Lettericon /> },
  { As: 'li' as const, img: <Pdficon /> },
].map(generateId);
interface ICommentFormProps {
  placeHolder: string;
  isOpen?: boolean;
  onOpen? : ()=>void;
  onClose? : ()=>void;
  id?: string;
  nameAthour?: string
}
export function CommentForm({ placeHolder, isOpen = true, id, nameAthour }: ICommentFormProps) {
  const { value, onChange } = useContext(commentContext);
  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value);
  }
  function handleClick() {
    console.log('cl');
  }
  useEffect(()=>{console.log('commentform useeffect')}, [isOpen])
  
  if (!isOpen) return <div />;
  return (
    isOpen && (
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea
          className={styles.inputText}
          value={value ? value : nameAthour}
          onChange={handleChange}
          placeholder={placeHolder}
        />
        <div className={styles.commentEdit}>
          <ul className={styles.ulEdit}>
            <GenericList list={list.map(merge({ onClick: handleClick }))} />
          </ul>
          <button type="submit" className={styles.btnSubmit}>
            Комментировать
          </button>
        </div>
      </form>
    )
  );
}
