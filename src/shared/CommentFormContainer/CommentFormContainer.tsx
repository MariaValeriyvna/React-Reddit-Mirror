import React, {
  ChangeEvent,
  FormEvent
} from 'react';
import { CommentForm } from '../CommentForm';

interface ICommentFormProps {
  placeHolder: string;
  textbtn: string;
  id?: string;
  nameAuthor?: string;
  key?: string;
  isOpen?: boolean;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>)=> void;
  valueText: string
}
export function CommentFormContainer({
  placeHolder,
  nameAuthor='',
  textbtn,
  isOpen = true,
  id,
  onChange,
  valueText
}: ICommentFormProps): JSX.Element {

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(valueText);
  }
  function handleClick() {
    console.log('cl');
  }
  
 
  return (
    <CommentForm 
    id={id} 
    placeHolder={placeHolder} 
    textbtn={textbtn}
    onChange={onChange}
    onSubmit={handleSubmit}
    onClick={handleClick}
    isOpen={isOpen}
    nameAuthor={nameAuthor}
    value={valueText}
    key={id}
    />
  );
}
