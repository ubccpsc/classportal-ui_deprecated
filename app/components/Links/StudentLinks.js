import React from 'react';
import { Link } from 'react-router';

const StudentLinks = () => {
	return (
		<ul className="links-hero-subnav">
	    <li><Link to="/students/courses" activeClassName="is-active">Courses</Link></li>
	    <li><Link to="/students/deliverables" activeClassName="is-active">Deliverables</Link></li>
	    <li><Link to="/students/grades" activeClassName="is-active">Grades</Link></li>
	    <li><Link to="/test" activeClassName="is-active">Repositories</Link></li>
	  </ul>
	)
}

export default StudentLinks;