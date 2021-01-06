import React from 'react';
import { BtnDown } from '../../BtnDown';
import { BtnUp } from '../../BtnUp';

interface IControlProps {
  onClickUp: () => void;
  onClickDown: () => void;
  openReplies: boolean;
}
export function ControlOpenAddComments({
  onClickUp,
  onClickDown,
  openReplies,
}: IControlProps): JSX.Element {
  return (
    <>
      <BtnUp click={onClickUp} state={openReplies} />
      <BtnDown click={onClickDown} state={openReplies} />
    </>
  );
}
