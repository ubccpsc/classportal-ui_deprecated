/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { browserHistory } from 'react-router';
import s from './Header.css';
import config from '../../config';

function redirect(e) {
  e.preventDefault();
  browserHistory.push('/');
}

const Header = () => (
  <div className={s.header} onClick={redirect} >
    <img className={s.logo} alt="" src="ubc.png" />
    <p className={s.title} >{config.title}</p>
    <p className={s.subtitle}>{config.subtitle}</p>
  </div>
);

export default Header;
