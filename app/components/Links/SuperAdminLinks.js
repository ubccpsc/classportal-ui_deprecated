import React from 'react';
import { Link } from 'react-router';
import config from '../../config';

let appRootPath = `${config.appAddress}`;

const SuperAdminLinks = () => {
	return (
		<ul className="links-hero-subnav">
	    <li><Link to={`${appRootPath}/superadmin/courses`} activeClassName="is-active">Courses</Link></li>
	    <li><Link to={`${appRootPath}/superadmin/labs`} activeClassName="is-active">Labs</Link></li>
	    <li><Link to={`${appRootPath}/superadmin/courses/grades`} activeClassName="is-active">Grades</Link></li>
	    <li><Link to={`${appRootPath}/superadmin/users`} activeClassName="is-active">Users</Link></li>
	    <li><Link to={`${appRootPath}/superadmin/administrators`} activeClassName="is-active">Administrators</Link></li>
	  </ul>
	);
}

export default SuperAdminLinks;