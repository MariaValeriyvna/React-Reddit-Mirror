import React, {
  ChangeEvent,
  FormEvent,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';
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

interface ICommentFormProps {
  placeHolder: string;
  textbtn: string;
  id?: string;
  nameAthour?: string;
  key?: string;
  isOpen?: boolean;
}
export function CommentForm({
  placeHolder,
  nameAthour = '',
  textbtn,
  isOpen = true,
  id
}: ICommentFormProps): JSX.Element {

  const { value, onChange } = useContext(commentContext);
  const [valueText, setValueText] = useState(nameAthour ? nameAthour+' , ': '')
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

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    if (id!=='post') setValueText(event.target.value)
    else onChange((event.target.value)); // для контролируемого компонента, для usecontext - onChange
  }
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    // console.log (inputRef.current?.value) // для неконтролируемого компонента
    console.log(value, valueText); // для контролируемого компонента
  }
  function handleClick() {
    console.log('cl');
  }
  useEffect(() => {
    inputRef.current?.focus();
    inputRef.current?.setSelectionRange(inputRef.current?.textLength, inputRef.current?.textLength+1,'forward');
  }, [isOpen]);
 
  if (!isOpen) return <div />;
  return (
    <form className={styles.form} onSubmit={handleSubmit} key={id}>
      <textarea
        ref={inputRef}
        className={styles.inputText}
        onChange={handleChange} //для контролируемого компонента
        placeholder={placeHolder}
        value={id==='post' ? value : valueText} // для контролируемого компонента
      ></textarea>
      <div className={styles.commentEdit}>
        <ul className={styles.ulEdit}>
          <GenericList list={list.map(merge({ onClick: handleClick }))} />
        </ul>
        <button type="submit" className={styles.btnSubmit}>
          {textbtn}
        </button>
      </div>
    </form>
  );
}
