import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef
} from 'react';
import { merge } from '../../utils/js/merge';
import { generateId } from '../../utils/react/generateRandomIndex';
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

interface ICommentFormProps {
  placeHolder: string;
  textbtn: string;
  id?: string;
  nameAuthor?: string;
  key?: string;
  isOpen?: boolean;
  onChange:(event: ChangeEvent<HTMLTextAreaElement>)=> void;
  onSubmit: (event: FormEvent)=>void;
  onClick: ()=> void,
  value?: string,
  valueWithName?: string
}
export function CommentForm({
  placeHolder,
  textbtn,
  isOpen = true,
  id,
  onClick,
  onSubmit,
  onChange,
  value
}: ICommentFormProps): JSX.Element {

  

  const inputRef = useRef<HTMLTextAreaElement>(null);

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


  useEffect(() => {
    inputRef.current?.focus();
    inputRef.current?.setSelectionRange(inputRef.current?.textLength, inputRef.current?.textLength+1,'forward');
  }, [isOpen]);
 
  if (!isOpen) return <div />;
  return (
    <form className={styles.form} onSubmit={onSubmit} key={id}>
      <textarea
        ref={inputRef}
        className={styles.inputText}
        onChange={onChange}
        placeholder={placeHolder}
        value={value} 
      ></textarea>
      <div className={styles.commentEdit}>
        <ul className={styles.ulEdit}>
          <GenericList list={list.map(merge({ onClick: onClick }))} />
        </ul>
        <button type="submit" className={styles.btnSubmit}>
          {textbtn}
        </button>
      </div>
    </form>
  );
}
