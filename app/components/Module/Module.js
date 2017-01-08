import React from 'react';
import s from './Module.css';

// parent component for all content modules.
const Module = (props) => (
  <div className={s.container}>
    <p className={s.title}>
      {props.title}
    </p>
    <div className={s.subcontainer} >
      {props.children}
    </div>
  </div>
);

export default Module;
