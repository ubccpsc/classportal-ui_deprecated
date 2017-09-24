import React from 'react';
import { Link } from 'react-router';
import config from '../../config';

let absolutePath = config.appAddress;

const StudentLinks = () => {
	return (
		<ul className="links-hero-subnav">
	    {/*<li><Link to={`${absolutePath}/students/courses`} activeClassName="is-active">Courses</Link></li> */}
	    <li><Link to={`${absolutePath}/students/310/teams`} activeClassName="is-active">Teams</Link></li>
	  </ul>
	)
}

export default StudentLinks;