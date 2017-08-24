import React from 'react';
import { Link } from 'react-router';
import config from '../../config';

let appRootPath = `${config.appAddress}`;

const AdminLinks = () => {
	return (
		<ul className="links-hero-subnav">
      <li><Link to={`${appRootPath}/admin/courses`}>Courses</Link></li>
      <li><Link to={`${appRootPath}/admin/courses/deliverables`}>Deliverables</Link></li>
      <li><Link to={`${appRootPath}/admin/courses/grades`} className="is-active">Grades</Link></li>
      <li><Link to={`${appRootPath}/admin/courses/grades`}>Repositories</Link></li>
    </ul>
  )
}

export default AdminLinks;