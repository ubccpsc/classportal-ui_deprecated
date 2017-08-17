import React from 'react';
import { Link } from 'react-router';
import config from '../../config';

let absolutePath = `${config.appAddress}`;

const SuperAdminLinks = () => {
	return (
		<ul className="links-hero-subnav">
	    <li><Link to={`${absolutePath}/superadmin/courses`} activeClassName="is-active">Courses</Link></li>
	    <li><Link to={`${absolutePath}/superadmin/deliverables`} activeClassName="is-active">Deliverables</Link></li>
	    <li><Link to={`${absolutePath}/superadmin/courses/grades`} activeClassName="is-active">Grades</Link></li>
	    <li><Link to={`${absolutePath}/superadmin/users`} activeClassName="is-active">Users</Link></li>
	    <li><Link to={`${absolutePath}/superadmin/administrators`} activeClassName="is-active">Administrators</Link></li>
	  </ul>
	);
}

export default SuperAdminLinks;