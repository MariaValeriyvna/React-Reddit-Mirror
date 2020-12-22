import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { tokenContext } from '../shared/Context/TokenContext';
export interface IPostData {
  kind?: string;
  data: ISimplPostData;
}
export interface ISimplPostData {
  title: string;
  author: string;
  created_utc: number;
  thumbnail?: string;
  id:string;
  url: string;
  selftext:string;
  score: string
}

export function usePostsData() {
  const [data, setData] = useState<Array<IPostData>>([]);
  const token = useContext(tokenContext);
  useEffect(() => {
    axios
      .get('https://oauth.reddit.com/best.json?limit=10', {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((resp) => {
        const postsData: Array<IPostData> = resp.data.data.children;
        console.log(postsData)
        setData(postsData);
      })
      .catch(console.log);
  }, [token]);
  return data;
}
