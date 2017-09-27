import React from 'react';
import { Link } from 'react-router';
import config from '../../config';

let appRootPath = config.appAddress;

const TeamListRow = (props) => {

	let courseUsersHref = `${appRootPath}/superadmin/` + props.courseId + "/students";
	let courseSettingsHref = `${appRootPath}/superadmin/` + props.courseId + "/settings";

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