import React from 'react';
import config from '../../config';
import { Link } from 'react-router';
import { Button } from 'elemental';

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
			  	<td>{props.deliverable.gradesReleased ? 'True' : 'False'}</td>
			  	<td><Link to={courseSettingsHref} activeClassName="is-active"><Button>Settings</Button></Link></td>
			  	<td><Link onClick={this.toggleEdit} activeClassName="is-active"><Button>Edit</Button></Link></td>

			</tr>

			<tr className="table-expand-row-content">
			  <td colSpan="8" className="table-expand-row-nested">
			  </td>
			</tr>
		</tbody>
	);
}

export default DeliverableListRow;