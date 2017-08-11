/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import { browserHistory } from 'react-router';
import config from '../../config';
import Foundation from 'react-foundation';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function redirect(e) {
  e.preventDefault();
  browserHistory.push('/');
}

const LayoutDeux = (props) => (
  <div>
    <div className="grid-center-example">
      <header className="subnav-hero-section">
        <h1 className="subnav-hero-headline">UBC ClassPortal<small> by CS Department</small></h1>
        <ul className="subnav-hero-subnav">
          <li><a href="#">Deliverables</a></li>
          <li><a href="#" class="is-active">Grades</a></li>
          <li><a target="_blank" href="http://zurb.com/responsive">Repositories</a></li>
        </ul>
      </header>
    </div>
      <div>{props.children}</div>
      <Footer/>
  </div>
);

export default LayoutDeux;
