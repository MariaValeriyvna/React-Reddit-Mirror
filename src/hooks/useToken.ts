import { useEffect } from 'react';
import { saveToken } from '../store/actions';
import { store } from '../store/store';

export function useToken() : void{
  useEffect(()=>{
    store.dispatch(saveToken())
  })
}