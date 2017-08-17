import React from 'react';
import { Link } from 'react-router';

const CourseListRow = (props) => {

	let courseUsersHref = "https://localhost:3000/superadmin/" + props.course.courseId + "/students";
	let courseSettingsHref = "https://localhost:3000/superadmin/" + props.course.courseId + "/settings";

	return (
		<tbody>
			<tr className="table-expand-row" data-open-details>
		  	<td><Link to={courseUsersHref}>{props.course.courseId}</Link></td>
		  	<td>{props.course.name}</td>
		  	<td>{props.course.minTeamSize}</td>
		  	<td>{props.course.maxTeamSize}</td>
		  	<td>{props.course.studentsSetTeams}<span className="expand-icon"></span></td>
		  	<td><a href={courseSettingsHref} isActiveClass="active-crud-link">Settings</a></td>
			</tr>

			<tr className="table-expand-row-content">
			  <td colSpan="8" className="table-expand-row-nested">
			  	<h6>Course Summary:</h6>
			    <p>{props.course.description}</p>
			  </td>
			</tr>
		</tbody>
	);
}

export default CourseListRow;