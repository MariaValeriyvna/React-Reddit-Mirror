import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export interface IUserData {
  author: string;
}

export function useUserAvatar({
  author,
}: IUserData): { user: string; avatar: string } {
  const [data, setData] = useState({ user: '', avatar: '' });
  const token = useSelector<RootState, string>((state) => state.token);
  useEffect(() => {
    axios
      .get(`https://www.reddit.com/user/${author}/about.json`)
      .then((resp) => {
        const avatarFull = resp.data.data.subreddit.icon_img;
        const avatar = avatarFull.replace(/\?.*/, '');
        setData({ user: author, avatar: avatar });
      })
      .catch(console.log);
  }, [author, token]);
  return data;
}
