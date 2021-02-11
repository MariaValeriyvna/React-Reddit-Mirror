import React, { useEffect, useRef, useState } from "react";
import styles from "./cardslist.css";
import { Card } from "./Card/Card";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import axios from "axios";
import { IPostData } from "../../hooks/usePostsData";

export function CardsList(): JSX.Element {
  // const { posts, loading, errorLoading } = useContext(postsContext);

  const token = useSelector<RootState, string>((state) => state.token);
  const [posts, setData] = useState<Array<IPostData>>([]);
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState("");
  const [nextAfter, setNextAfter] = useState("");
  const [countLoad, setCountLoad] = useState(0);
  const [nextLoad, setNextLoad] = useState(false);
  const bottomOfList = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!token) return;
    setCountLoad(countLoad + 1);
    setNextLoad(false);
    setLoading(true);
    setErrorLoading("");
    console.log("load axios1", countLoad);
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
            setData((prevPostData) => prevPostData.concat(...postsData));
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
  }, [bottomOfList.current, nextAfter, token, nextLoad]);

  // Ecли использовать react-window
  // const Row = ({ index, style }: IPropsRow) => {
  //   if (posts[index]) {
  //     let urlpreview = "";
  //     if (posts[index].data.thumbnail === undefined) urlpreview = "";
  //     else urlpreview = posts[index].data.thumbnail || "";
  //     const result = Math.ceil(
  //       Math.ceil(
  //         Math.abs(new Date().getTime() - posts[index].data.created_utc * 1000)
  //       ) /
  //         (1000 * 60 * 60)
  //     );
  //     const author = posts[index].data.author;
  //     return (
  //       <div key={index} style={style}>
  //         <Card
  //           id={posts[index].data.id}
  //           title={posts[index].data.title}
  //           author={author}
  //           created_utc={result}
  //           urlpreview={urlpreview}
  //           score={posts[index].data.score}
  //           num_comments={posts[index].data.num_comments}
  //         />
  //       </div>
  //     );
  //   } else return <div></div>;
  // };

  return (
    <ul className={styles.cardsList}>
      {token && posts.length === 0 && !loading && !errorLoading && (
        <div style={{ textAlign: "center" }}>Нет ни одного поста</div>
      )}
      {countLoad < 1 && loading && (
        <div style={{ textAlign: "center" }}>Загрузка постов...</div>
      )}
      {errorLoading && (
        <div role="alert" style={{ textAlign: "center" }}>
          Необходимо войти в личный кабинет reddit.com <br /> или {errorLoading}
        </div>
      )}
      {/* // Если использовать react-window
         <Autosizer>
        {({ height, width }: any) => (
          <List
            height={height}
            itemCount={30}
            itemSize={innerWidth<1400 ? 320 : 200}
            width={width}
          >
            {Row}
          </List>
        )}
         </Autosizer> */}
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
      {countLoad < 4 && countLoad > 1 && (
        <button className={styles.btnLoad} disabled>
          Идет загрузка...
        </button>
      )}

      <div ref={bottomOfList}></div>
    </ul>
  );
}
