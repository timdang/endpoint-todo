import React from 'react';

import styles from './loader.module.css';

export const Loader = () => (
  <div className={styles.spinner}>
    <div className={styles.circle} />
  </div>
);
