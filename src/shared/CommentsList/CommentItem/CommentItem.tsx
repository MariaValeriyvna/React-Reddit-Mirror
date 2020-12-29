import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CommentsList } from '..';
import { updateReply } from '../../../actions';
import { RootState } from '../../../store';
import { merge } from '../../../utils/js/merge';
import { generateId } from '../../../utils/react/generateRandomIndex';
import { TimeComment } from '../../CardsList/Card/TimeComment';
import { User } from '../../CardsList/Card/User';
import { CommentFormContainer } from '../../CommentFormContainer';
import { GenericList } from '../../GenericList';
import { CommentIcon, ShareIcon, ComplainIcon } from '../../Icons';
import { ControlOpenAddComments } from '../ControlOpenAddComments';
import styles from './commentitem.css';

interface ISimplCommentItemData {
  author: string;
  body: string;
  created_utc: number;
  id: string;
  subreddit: string;
  isOpenReply?: boolean;
  replies?: ICommentRepliesProps;
}
interface ICommentRepliesProps {
  data: IChildrenRepliesProps;
}

interface IChildrenRepliesProps {
  children: Array<IRepliesListData>;
}
interface IRepliesListData {
  data: ISimplCommentItemData;
}

export function CommentItem({
  created_utc,
  subreddit,
  author,
  body,
  isOpenReply = false,
  replies,
  id
}: ISimplCommentItemData): JSX.Element {
  const [openReplies, setOpenReplies]=useState(replies && replies.data.children.length > 0 ? false : true)
  const [openFormReply, setOpenFormReply] = useState(isOpenReply);
  
  const result = Math.ceil(
    Math.ceil(Math.abs(new Date().getTime() - created_utc * 1000)) /
      (1000 * 60 * 60)
  );

  const handleItemClick = () => {
    setOpenFormReply(!openFormReply);
  };
  const LIST = [
    {
      As: 'li' as const,
      text: 'Ответить',
      img: <CommentIcon />,
      onClick: handleItemClick,
    },
    { As: 'li' as const, text: 'Поделиться', img: <ShareIcon /> },
    { As: 'li' as const, text: 'Пожаловаться', img: <ComplainIcon /> },
  ].map(generateId)
  const valueText = useSelector<RootState,string>(state=>  (state.commentsForReplies[id]?.reply) ? state.commentsForReplies[id].reply : author+' , ')
  const dispatch = useDispatch()
  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) { 
    dispatch(updateReply(id, author, event.target.value))
    }
  
  return (
    <>
      <div className={styles.controls}>
        <ControlOpenAddComments openReplies={openReplies} onClickUp={()=> setOpenReplies(false)} onClickDown={()=> setOpenReplies(true)}/>
      </div>
      <div>
        <div className={styles.itemtitle}>
          <div className={styles.titlesub}>{subreddit}</div>
          <div className={styles.itemtitle}>
            <TimeComment created_utc={result} />
            <User author={author} />
          </div>
        </div>
        <p className={styles.textcomment}>{body}</p>
        <ul className={styles.ulicons}>
          <GenericList underline={false} list={LIST.map(merge({}))} />
        </ul>
        <CommentFormContainer
          placeHolder=""
          textbtn="Ответить"
          nameAuthor={author}
          isOpen={openFormReply}
          onChange={handleChange}
          valueText={valueText}
        />
      </div>
      {openReplies && replies && replies.data.children.length > 0 && (
        <CommentsList forauthor={author} key={author} comments={replies.data.children}  />
      )}
    </>
  );
}
