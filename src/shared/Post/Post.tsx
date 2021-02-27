import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./post.css";
import { TextComponent } from "../CardsList/Card/TextComponent";
import { Controls } from "../CardsList/Card/Controls";
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
import { CommentFormContainer } from "../CommentFormContainer";
import { useSelector } from "react-redux";
import { IPosts, RootState } from "../../store/store";
import { useHistory, useParams } from "react-router-dom";

export function Post(): JSX.Element {
  const history = useHistory();
  const ref = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        (event.target instanceof Node &&
        !ref.current?.contains(event.target)) || (event.target instanceof Node && btn.current?.contains(event.target)) 
      ) {
        history.push("/posts");
      }
    }
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  const { id } = useParams<{ id: string }>();
  const postdata = useSelector<RootState, Array<IPosts>>((state) =>
    state.posts.filter((post) => post.data.id === id)
  );
  const post = postdata[0].data;

  const comments = useCommentsData(id);

  const LIST = [
    { As: "li" as const, text: "Комментарии", img: <CommentIcon /> },
    { As: "li" as const, text: "Поделиться", img: <ShareIcon /> },
    { As: "li" as const, text: "Скрыть", img: <HideIcon /> },
    { As: "li" as const, text: "Сохранить", img: <SaveIcon /> },
    { As: "li" as const, text: "Пожаловаться", img: <ComplainIcon /> },
  ].map(generateId);
  const postMedia = post.media?.reddit_video?.fallback_url;
  const urlImg = post.url;
  const checkurl = urlImg.includes("jpg") || urlImg.includes("png");
  const selftext = post.selftext;

  const valueText = useSelector<RootState, string>((state) =>
    state.commentForPost[id]?.comment ? state.commentForPost[id].comment : ""
  );

  function handleClickEdit() {
    console.log("click");
  }

  const node = document.querySelector("#modal_root");
  if (!node) return <div />;

  return ReactDOM.createPortal(
    <div className={styles.modalWrap} >
      <div className={styles.modal} ref={ref}>
        <button className={styles.cross} ref={btn}>
          <Crossicon />
        </button>

        <div className={styles.modalTitle}>
          <Controls score={post.score} num_comments={post.num_comments} />
          <TextComponent
            title={post.title}
            author={post.author}
            created_utc={post.created_utc}
            titleShort={false}
            id={id}
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
            (post.thumbnail.includes("//") && (
              <>
                <img
                  className={styles.modalContent__media}
                  src={post.thumbnail}
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
            list={LIST.map(merge({ onClick: handleClickEdit }))}
          />
        </ul>
        <CommentFormContainer
          id={post.title}
          placeHolder={"Оставьте Ваш комментарий"}
          textbtn={"Комментировать"}
          valueText={valueText}
        />
        {comments.length > 0 && (
          <CommentsList
            comments={comments}
            forauthor={post.author}
            key={post.author}
          />
        )}
      </div>
    </div>,
    node
  );
}
