import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { tokenContext } from '../shared/Context/TokenContext';

export interface IUserData {
  author: string;
}

export function useUserAvatar({ author }: IUserData): {user: string, avatar: string } {
  const [data, setData] = useState({ user: '', avatar: '' });
  const token = useContext(tokenContext);
  useEffect(() => {
    axios
      .get(`https://www.reddit.com/user/${author}/about.json`)
      .then((resp) => {
        const avatarFull = resp.data.data.subreddit.icon_img;
        const avatar = avatarFull.replace(/\?.*/, '');
        setData({ user: author, avatar: avatar })
      })
      .catch(console.log);
  }, [author, token])
  return data;
}
