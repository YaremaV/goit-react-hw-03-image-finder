import React from 'react';
import s from './button.module.css';

export default function Button() {
  return (
    <button type="button" className={s.Button}>
      Load more
    </button>
  );
}
