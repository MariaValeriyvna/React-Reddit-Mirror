import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from '../../store/store';

export function Auth(): JSX.Element {
  const token = useSelector<RootState, string>((state) => state.token);
  
  return (
    <div role="alert" style={{ textAlign: "center" }}>
    {token ? <Redirect to="/posts" /> : "Необходимо войти в личный кабинет reddit.com"}
  </div>
  );
}
