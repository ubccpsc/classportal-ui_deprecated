import React, { PropTypes } from 'react';
import s from './Module.css';

// parent component for all content modules.
const Module = (props) => (
  <div className={s.container}>
    <div className={s.title}><p>{props.title}</p></div>
    <div className={s.subcontainer} >{props.children}</div>
  </div>
);

Module.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Module;
