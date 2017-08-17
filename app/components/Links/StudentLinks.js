import React from 'react';
import { Link } from 'react-router';
import config from '../../config';

let absolutePath = `${config.appAddress}`;

const StudentLinks = () => {
	return (
		<ul className="links-hero-subnav">
	    <li><Link to={`${absolutePath}/students/courses`} activeClassName="is-active">Courses</Link></li>
	    <li><Link to={`${absolutePath}/students/deliverables`} activeClassName="is-active">Deliverables</Link></li>
	    <li><Link to={`${absolutePath}/students/grades`} activeClassName="is-active">Grades</Link></li>
	    <li><Link to={`${absolutePath}/test`} activeClassName="is-active">Repositories</Link></li>
	  </ul>
	)
}

export default StudentLinks;