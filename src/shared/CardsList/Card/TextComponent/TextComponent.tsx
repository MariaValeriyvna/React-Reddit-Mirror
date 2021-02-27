import React from "react";
import { User } from "../User/User";
import { TimeComment } from "../TimeComment/TimeComment";
import styles from "./textcomponent.css";
import { useState } from "react";
import { Post } from "../../../Post";
import { Link, useLocation } from "react-router-dom";

interface ITextComponentkProps {
  title: string;
  author: string;
  created_utc: number;
  titleShort?: boolean;
  id: string;
}

export function TextComponent({
  title,
  author,
  created_utc,
  titleShort = true,
  id,
}: ITextComponentkProps): JSX.Element {
  
  const titleMod =
    title.length > 70 && titleShort ? title.substring(0, 64) + "... " : title;

  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <User author={author} />
        <TimeComment created_utc={created_utc} />
      </div>
      <Link to={`/posts/${id}`} className={styles.postLink}>
        {titleMod}
      </Link>
    </div>
  );
}
