import React from 'react';
import s from './Module.css';

// parent component for all content modules.
const Module = (props) => (
  <div className={s.container}>
    <div className={s.title}><p>{props.title}</p></div>
    <div className={s.subcontainer} >{props.children}</div>
  </div>
);

export default Module;
