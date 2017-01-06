import React from 'react';
import s from './Module.css';

// parent component for all content modules.
const Module = (props) => (
  <div className={s.container}>
    <h3 className={s.title}>
      {props.title}
    </h3>
    <div className={s.subcontainer} >
      {props.children}
    </div>
  </div>
);

export default Module;
