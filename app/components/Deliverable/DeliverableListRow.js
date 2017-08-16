import React from 'react';

const DeliverableListRow = (props) => {

	return (
		<tbody>
			<tr className="table-expand-row" data-open-details>
			  	<td>{props.deliverable.name}</td>
			  	<td>{props.deliverable.url}</td>
			  	<td>{props.deliverable.open}</td>
			  	<td>{props.deliverable.close}</td>
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