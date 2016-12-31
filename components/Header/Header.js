/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import { browserHistory } from 'react-router';
import s from './Header.css';
import config from '../../config/env';

function redirectToHome(e) {
  e.preventDefault();
  browserHistory.push('/');
}

const Header = () => (
  <div className={s.header} onClick={redirectToHome} >
    <h1 className={s.title}>{config.title}</h1>
  </div>
);

export default Header;
