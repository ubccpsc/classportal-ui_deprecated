import React from 'react';
import { Link } from 'react-router';

const TeamListRow = (props) => {

	let courseUsersHref = "https://localhost:3000/superadmin/" + props.courseId + "/students";
	let courseSettingsHref = "https://localhost:3000/superadmin/" + props.courseId + "/settings";

	return (
		<tbody>
			<tr className="table-expand-row" data-open-details>
		  	<td><Link to={courseUsersHref}></Link></td>
		  	<td></td>
		  	<td></td>
		  	<td></td>
		  	<td><span className="expand-icon"></span></td>
		  	<td><a href={courseSettingsHref} >Settings</a></td>
			</tr>

			<tr className="table-expand-row-content">
			  <td colSpan="8" className="table-expand-row-nested">
			  	<h6>Course Summary:</h6>
			    <p></p>
			  </td>
			</tr>
		</tbody>
	);
}

export default TeamListRow;