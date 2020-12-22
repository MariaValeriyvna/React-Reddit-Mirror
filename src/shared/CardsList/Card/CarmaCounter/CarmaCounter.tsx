import React, { useContext, useEffect, useState } from 'react';
import styles from './carmacounter.css';
import { BtnUp } from '../../../BtnUp';
import { BtnDown } from '../../../BtnDown';
import axios from 'axios';
import { tokenContext } from '../../../Context/TokenContext';
import { postsContext } from '../../../Context/postsContext';

export interface ITitleData {
  score: string;
}

export function CarmaCounter({score}:  ITitleData) {
  return (
    <div className={styles.karmaCounter}>
      <BtnUp />
      <span className={styles.karmaValue}>{score}</span>
        <BtnDown />
    </div>
  );
}
