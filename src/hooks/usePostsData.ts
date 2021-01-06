import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
export interface IPostData {
  kind?: string;
  data: ISimplPostData;
}
export interface ISimplPostData {
  title: string;
  author: string;
  created_utc: number;
  thumbnail?: string;
  id: string;
  url: string;
  selftext: string;
  score: string;
  num_comments: number;
}

export function usePostsData(): IPostData[] {
  const [data, setData] = useState<Array<IPostData>>([]);
  const token = useSelector<RootState, string>((state) => state.token);
  useEffect(() => {
    axios
      .get('https://oauth.reddit.com/best.json?limit=10', {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((resp) => {
        const postsData: Array<IPostData> = resp.data.data.children;
        console.log(postsData);
        setData(postsData);
      })
      .catch(console.log);
  }, [token]);
  return data;
}
