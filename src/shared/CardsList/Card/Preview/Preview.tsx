import React from 'react';
import { RedditIcon } from '../../../Icons';
import styles from './preview.css';
interface IPreviewProps {
  url: string;
}
export function Preview({ url }: IPreviewProps) {
  
  return (
      <div className={styles.preview}>
       {url.includes('//')
      ?  <img className={styles.previewImg} src={url} alt="pic"/>
      : <RedditIcon size={"100%"} />
       }
        </div>
  )
  }

