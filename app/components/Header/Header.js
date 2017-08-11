/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import { browserHistory } from 'react-router';
import css from './Header.css';
import config from '../../config';
import Foundation from 'react-foundation';

function redirect(e) {
  e.preventDefault();
  browserHistory.push('/');
}

const Header = () => (
  <div className={css.header} onClick={redirect} >
    <img className={css.logo} alt="" src="ubc.png" />
    <p className={css.title} >{config.title}</p>
    <p className={css.subtitle}>{config.subtitle}</p>
  </div>
);

export default Header;
