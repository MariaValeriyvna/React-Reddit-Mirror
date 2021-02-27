import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { getPosts } from "../store/actions";
export interface IUsePostsData {
  posts: IPostData[];
  loading: boolean;
  errorLoading: string;
}
export interface IPostData {
  kind?: string;
  data: ISimplPostData;
}
export interface ISimplPostData {
  thumbnail_height: number;
  title: string;
  author: string;
  created_utc: number;
  thumbnail?: string;
  id: string;
  url: string;
  selftext: string;
  score: string;
  num_comments: number;
}

export function usePostsData(): IUsePostsData {
  const [posts, setData] = useState<Array<IPostData>>([]);
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState("");
  const [nextAfter, setNextAfter] = useState("");
  const token = useSelector<RootState, string>((state) => state.token);
  
  useEffect(() => {
    if (!token) return;
    setLoading(true);
    setErrorLoading("");

    async function loadBestPost() {
      try {
        await axios
          .get("https://oauth.reddit.com/best.json", {
            headers: { Authorization: `bearer ${token}` },
            params: {
              limit: 30,
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
    loadBestPost();
  }, [token]);

  return { posts, loading, errorLoading };
}
