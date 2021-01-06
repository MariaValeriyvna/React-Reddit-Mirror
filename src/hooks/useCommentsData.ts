import { useEffect, useState } from 'react';
import axios from 'axios';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';

export interface ICommentData {
  data: ISimplCommentData;
}
export interface ISimplCommentData {
  author: string;
  body: string;
  created_utc: number;
  id: string;
  subreddit: string;
  replies: IRepliesProps;
}
interface IRepliesProps {
  data: IChildrenProps;
  kind: string;
}

interface IChildrenProps {
  children: Array<ICommentData>;
}

export function useCommentsData(id: string): ICommentData[] {
  const token = useSelector<RootState, string>((state) => state.token);
  const [comments, setComments] = useState<Array<ICommentData>>([]);
  useEffect(() => {
    axios
      .get(`https://www.reddit.com/comments/${id}.json?limit=20`)
      .then((resp) => {
        setComments(resp.data[1].data.children);
      })
      .catch(console.log);
  }, [token, id]);
  return comments;
}
