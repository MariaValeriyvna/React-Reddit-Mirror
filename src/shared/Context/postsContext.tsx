import React from 'react';
import { usePostsData } from '../../hooks/usePostsData';

export interface IPostContextData {
  kind?: string;
  data: ISimplPostContextData;
}
export interface ISimplPostContextData {
  title: string;
  author: string;
  created_utc: number;
  thumbnail?: string;
  media?: IMedia;
  id: string;
  url: string;
  selftext: string;
  score: string;
  num_comments: number;
}

export interface IMedia {
  reddit_video: { fallback_url?: string };
}

export const postsContext = React.createContext<Array<IPostContextData>>([]);
export function PostsContextProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const posts = usePostsData();
  return (
    <postsContext.Provider value={posts}>{children}</postsContext.Provider>
  );
}
