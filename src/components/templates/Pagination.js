import React from 'react';
import Link from 'next/link';
import styles from './pagination.module.scss';

const Pagination = () => {
  return (
    <div className={styles.pagination}>
        <Link href={'#'} className={styles.active}>1</Link>
        <Link href={'#'}>2</Link>
        <Link href={'#'}>3</Link>
    </div>
  )
}

export default Pagination