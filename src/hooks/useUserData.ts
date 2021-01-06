import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { IUserData, meRequestAsync } from '../store/me/actions';
export interface IUseUserProps {
  data: IUserData;
  loading: boolean;
}
export function useUserData(): IUseUserProps {
  const token = useSelector<RootState, string>((state) => state.token);
  const data = useSelector<RootState, IUserData>((state) => state.me.data);
  const loading = useSelector<RootState, boolean>((state) => state.me.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!token) return;
    dispatch(meRequestAsync());
  }, [dispatch, token]);
  return { data, loading };
}
