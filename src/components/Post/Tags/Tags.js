// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import styles from './Tags.module.scss';

type Props = {
  tags: string[],
  tagSlugs: string[]
};

const Tags = ({ tags, tagSlugs }: Props) => (
  <div className={styles['tags']}>
    <ul className={styles['tags__list']}>
      <li className={styles['tags__list-title']}>
        <b className={styles['tags__title']}>Tags:</b>
      </li>
      {tagSlugs.map((slug, i) => (
        <li className={styles['tags__list-item']} key={tags[i]}>
          <Link to={slug} className={styles['tags__list-item-link']}>
            {tags[i]}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Tags;
