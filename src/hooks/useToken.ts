import { useEffect } from 'react';
import { SET_TOKEN } from '../store/actions';
import { store } from '../store/store';

export function useToken() : void{
  useEffect(()=>{
    if (window.__token__) store.dispatch ({type: SET_TOKEN, token: window.__token__})
  })
  
}