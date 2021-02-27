import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IPosts, RootState } from "../../store/store";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { IPostData } from "../../hooks/usePostsData";
import { Card } from "./Card/Card";
import { getPosts } from "../../store/actions";
import styles from "./cardslist.css";

export function CardsList(): JSX.Element {
  const token = useSelector<RootState, string>((state) => state.token);
  const posts = useSelector<RootState, Array<IPosts>>((state) => state.posts);
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState("");
  const [nextAfter, setNextAfter] = useState("");
  const [countLoad, setCountLoad] = useState(0);
  const [nextLoad, setNextLoad] = useState(false);
  const bottomOfList = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;
    setCountLoad(countLoad + 1);
    setNextLoad(false);
    setLoading(true);
    setErrorLoading("");
    async function loadBestPost() {
      try {
        await axios
          .get("https://oauth.reddit.com/best.json", {
            headers: { Authorization: `bearer ${token}` },
            params: {
              limit: 10,
              after: nextAfter,
            },
          })
          .then((resp) => {
            const postsData: Array<IPostData> = resp.data.data.children;
            setNextAfter(resp.data.data.after);
            dispatch(getPosts(postsData));
          });
      } catch (error) {
        setErrorLoading(String(error));
      }
      setLoading(false);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadBestPost();
        }
      },
      { rootMargin: "600px" }
    );

    if (bottomOfList.current) {
      if (countLoad < 3) observer.observe(bottomOfList.current);
    }

    return () => {
      if (bottomOfList.current) observer.unobserve(bottomOfList.current);
    };
  }, [bottomOfList.current, nextAfter, token, nextLoad, posts]);

  return (
    <>
      {!token && <Redirect to="/auth" />}
      <ul className={styles.cardsList}>
        {token && posts.length === 0 && !loading && !errorLoading && (
          <div style={{ textAlign: "center" }}>Нет ни одного поста</div>
        )}
        {countLoad < 1 && loading && (
          <div style={{ textAlign: "center" }}>Загрузка постов...</div>
        )}
        {errorLoading && (
          <div role="alert" style={{ textAlign: "center" }}>
            {errorLoading}
            <br /> Попробуйти войти повторно в личный кабинет!
          </div>
        )}

        {posts.map((post, index) => {
          let urlpreview: string;
          if (post.data.thumbnail === undefined) urlpreview = "";
          else urlpreview = post.data.thumbnail;
          const result = Math.ceil(
            Math.ceil(
              Math.abs(new Date().getTime() - post.data.created_utc * 1000)
            ) /
              (1000 * 60 * 60)
          );
          const author = post.data.author;
          return (
            <li className={styles.cardLi} key={index}>
              <Card
                id={post.data.id}
                title={post.data.title}
                author={author}
                created_utc={result}
                urlpreview={urlpreview}
                score={post.data.score}
                num_comments={post.data.num_comments}
              />
            </li>
          );
        })}
        {countLoad == 4 && (
          <button
            className={styles.btnLoad}
            onClick={() => {
              setCountLoad(0);
              setNextLoad(true);
            }}
          >
            Загрузить еще?
          </button>
        )}
        {!errorLoading && countLoad < 4 && countLoad > 1 && (
          <button className={styles.btnLoad} disabled>
            Идет загрузка...
          </button>
        )}

        <div ref={bottomOfList}></div>
      </ul>
    </>
  );
}
