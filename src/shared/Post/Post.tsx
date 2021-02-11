import React, { useRef, useContext} from "react";
import ReactDOM from "react-dom";
import styles from "./post.css";
import { TextComponent } from "../CardsList/Card/TextComponent";
import { Controls } from "../CardsList/Card/Controls";
import { postsContext } from "../Context/postsContext";
import {
  CommentIcon,
  ComplainIcon,
  Crossicon,
  HideIcon,
  RedditIcon,
  SaveIcon,
  ShareIcon,
} from "../Icons";
import { merge } from "../../utils/js/merge";
import { generateId } from "../../utils/react/generateRandomIndex";
import { GenericList } from "../GenericList";
import { CommentsList } from "../CommentsList";
import { useCommentsData } from "../../hooks/useCommentsData";
import { useCloseElement } from "../../hooks/useCloseElement";
import { CommentFormContainer } from "../CommentFormContainer";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface IPost {
  onClose: () => void;
  title: string;
  author: string;
  created_utc: number;
  id: string;
  urlpreview: string;
  score: string;
  num_comments: number;
}

export function Post({
  title,
  onClose,
  author,
  created_utc,
  id,
  urlpreview,
  score,
  num_comments,
}: IPost): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const {posts, loading, errorLoading} = useContext(postsContext);
  const comments = useCommentsData(id);
  const isClose = useCloseElement(ref, false, onClose);
  const LIST = [
    { As: "li" as const, text: "Комментарии", img: <CommentIcon /> },
    { As: "li" as const, text: "Поделиться", img: <ShareIcon /> },
    { As: "li" as const, text: "Скрыть", img: <HideIcon /> },
    { As: "li" as const, text: "Сохранить", img: <SaveIcon /> },
    { As: "li" as const, text: "Пожаловаться", img: <ComplainIcon /> },
  ].map(generateId);
  console.log(comments);
  let postMedia, urlImg, checkurl, selftext;
  posts.forEach((post) => {
    if (post.data.id === id) {
      postMedia = post.data.media?.reddit_video?.fallback_url;
      urlImg = post.data.url;
      checkurl = urlImg.includes("jpg") || urlImg.includes("png");
      selftext = post.data.selftext;
    }
  });
  const valueText = useSelector<RootState, string>((state) =>
    state.commentForPost[id]?.comment ? state.commentForPost[id].comment : ""
  );
  function handleClick() {
    console.log("click");
  }

  const node = document.querySelector("#modal_root");
  if (!node || isClose) return <div />;

  return ReactDOM.createPortal(
    <div className={styles.modalWrap}>
      <div className={styles.modal} ref={ref}>
        <button className={styles.cross} onClick={onClose}>
          <Crossicon />
        </button>
        <div className={styles.modalTitle}>
          <Controls score={score} num_comments={num_comments} />
          <TextComponent
            title={title}
            author={author}
            created_utc={created_utc}
            titleShort={false}
            id={id}
            urlpreview={urlpreview}
            score={score}
            num_comments={num_comments}
          />
        </div>
        <div className={styles.modalContent}>
          <p>{selftext}</p>
          {postMedia ? (
            <video className={styles.modalContent__media} controls>
              <source src={postMedia} type="video/mp4" />
            </video>
          ) : checkurl ? (
            <img
              className={styles.modalContent__media}
              src={urlImg}
              alt="pic"
            />
          ) : (
            (urlpreview.includes("//") && (
              <>
                <img
                  className={styles.modalContent__media}
                  src={urlpreview}
                  alt="pic"
                />
                <a href={urlImg}>{urlImg}</a>
              </>
            )) || <RedditIcon size={"100px"} />
          )}
        </div>
        <ul className={styles.ulicons}>
          <GenericList
            underline={false}
            list={LIST.map(merge({ onClick: handleClick }))}
          />
        </ul>
        <CommentFormContainer
          id={"post"}
          placeHolder={"Оставьте Ваш комментарий"}
          textbtn={"Комментировать"}
          valueText={valueText}
        />
        {comments.length > 0 && (
          <CommentsList comments={comments} forauthor={author} key={author} />
        )}
      </div>
    </div>,
    node
  );
}
