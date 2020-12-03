import React from 'react';
import { usePostsData } from '../../hooks/usePostsData';

export interface IPostContextData {
  kind?:string;
  data: ISimplPostContextData;
}
export interface ISimplPostContextData {
 title:string;
 author:string;
 created_utc: number;
 thumbnail?: string;
 preview?: IPreviewPostContextData
}
export interface IPreviewPostContextData{
  images?: IArrayImgContext
}
export interface IArrayImgContext {
 0?: ISourceContext 
}
export interface ISourceContext {
  source?: Iurlcontext
}
export interface Iurlcontext {
  url: string
}

export const postsContext= React.createContext<Array<IPostContextData>>([]);
export function PostsContextProvider({children}: {children: React.ReactNode}){
  const posts = usePostsData();
  console.log('context',posts)
  return (
    <postsContext.Provider value={posts}>
      {children}
    </postsContext.Provider>
  )
}