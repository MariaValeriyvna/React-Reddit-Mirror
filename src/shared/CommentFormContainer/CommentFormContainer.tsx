import React from 'react';
import { CommentForm } from '../CommentForm';

interface ICommentFormProps {
  placeHolder: string;
  textbtn: string;
  id?: string;
  nameAuthor?: string;
  key?: string;
  isOpen?: boolean;
  valueText: string;
}
export function CommentFormContainer({
  placeHolder,
  nameAuthor = '',
  textbtn,
  isOpen = true,
  id,
  valueText,
}: ICommentFormProps): JSX.Element {
 
  function handleClick() {
    console.log('cl');
  }

  return (
    <CommentForm
      id={id}
      placeHolder={placeHolder}
      textbtn={textbtn}
      onClick={handleClick}
      isOpen={isOpen}
      nameAuthor={nameAuthor}
      value={valueText}
      key={id}
    />
  );
}
