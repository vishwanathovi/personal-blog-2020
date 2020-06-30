
import React from 'react';
import styles from './NavHeader.module.scss'

import Author from '../Author';

function NavHeader() {

  return (
      <div className={styles['header']}>
        <div className={styles['header__left']}>
          <Author />
        </div>
        <div className={styles['header__right']}>
          Menu items
        </div>
      </div>
  );
}

export default NavHeader;
