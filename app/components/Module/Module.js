import React, { PropTypes } from 'react';
import css from './Module.css';

// parent component for all content modules.
const Module = (props) => (
  <div className={css.container + ' twelve column'}>
    <div className={css.title}><p>{props.title}</p></div>
    <div className={css.subcontainer} >{props.children}</div>
  </div>
);

Module.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Module;
