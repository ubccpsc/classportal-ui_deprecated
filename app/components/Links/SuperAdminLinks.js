import React from 'react';
import { Link } from 'react-router';

const SuperAdminLinks = () => {
	return (
		<ul className="links-hero-subnav">
		    <li><Link to="/superadmin/courses" activeClassName="is-active">Class Lists</Link></li>
		    <li><Link to="/superadmin/courses/settings" activeClassName="is-active">Class Settings</Link></li>
		    <li><Link to="/superadmin/deliverables" activeClassName="is-active">Deliverables</Link></li>
		    <li><Link to="/superadmin/users" activeClassName="is-active">Users</Link></li>
		    <li><Link to="./administrators" activeClassName="is-active">Administrators</Link></li>
	  </ul>
	)
}

export default SuperAdminLinks;