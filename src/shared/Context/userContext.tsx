import React from 'react';
import { useUserData } from '../../hooks/useUserData';
import { IUserData } from '../../store/me/actions';

export interface IUserContextData {
  data?: IUserData;
  loading?: boolean;
}
export const userContext = React.createContext<IUserContextData>({});

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const datauser = useUserData();
  return (
    <userContext.Provider value={datauser}>{children}</userContext.Provider>
  );
}
