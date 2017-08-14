import React from 'react';

const SuperAdminLinks = () => {
	return (
		<ul className="links-hero-subnav">
	    <li><a href="/superadmin/courses">Courses</a></li>
	    <li><a href="/superadmin/deliverables">Deliverables</a></li>
	    <li><a href="/superadmin/users" className="is-active">Users</a></li>
	    <li><a target="/superadmin/administrators" href="./administrators">Administrators</a></li>
	  </ul>
	)
}

export default SuperAdminLinks;