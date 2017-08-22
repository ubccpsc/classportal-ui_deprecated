import React from 'react';
import config from '../../config';
import { Link } from 'react-router';

const DeliverableListRow = (props) => {

	let appRootPath = config.appAddress;
  let courseSettingsHref = "https://localhost:3000/superadmin/" + props.courseId + `/${props.deliverable.name}/settings`;

	return (
		<tbody>
			<tr className="table-expand-row" data-open-details>
			  	<td>{props.deliverable.name}</td>
			  	<td>{props.deliverable.url}</td>
			  	<td>{props.deliverable.open}</td>
			  	<td>{props.deliverable.close}</td>
			  	<td><Link to={courseSettingsHref} isActiveClass="is-active">Settings</Link></td>
			</tr>

			<tr className="table-expand-row-content">
			  <td colspan="8" className="table-expand-row-nested">
			    <p>info</p>
			  </td>
			</tr>
		</tbody>
	);
}

export default DeliverableListRow;