/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import { browserHistory } from 'react-router';
import config from '../../config';
import Links from '../Links/Links';
import Logout from '../../modules/common/Logout';
import { FormInput, FormIconField, Glyph, Button, InputGroup } from 'elemental';

function redirect(e) {
  e.preventDefault();
  browserHistory.push('/');
}

const Header = (props) => (
	<div>
  <header className="subnav-hero-section">
	    <h1 className="subnav-hero-headline">UBC ClassPortal<small> by CS Department</small></h1>
		    <div className="subnav-logout-button-area">
			   	<Logout/>
		    </div>
	    <Links />
  </header>
  </div>
);

export default Header;
