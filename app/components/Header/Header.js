/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import { browserHistory } from 'react-router';
import config from '../../config';
import Foundation from 'react-foundation';
import Links from '../Links/Links';

function redirect(e) {
  e.preventDefault();
  browserHistory.push('/');
}

const Header = (props) => (
  <header className="subnav-hero-section">
    <h1 className="subnav-hero-headline">UBC ClassPortal<small> by CS Department</small></h1>
    <Links />
  </header>
);

export default Header;
