
import React from 'react';
import styles from './Navheader.module.scss'

import Author from './../Author';
import Menu from './../Menu';

const Navheader = () => (
      <div className={styles['header']}>
        <div className={styles['header__left']}>
          <Author />
        </div>
        <div className={styles['header__right']}>
          <Menu horizontal bold />
        </div>
      </div>
);

export default Navheader;
