import React from 'react';

const ClassListRow = ({student}) => {
  return (
		<tbody>
			<tr className="table-expand-row" data-open-details>
		  	<td>{student.lname}</td>
		  	<td>{student.fname}</td>
		  	<td>{student.csid}</td>
		  	<td><span className="expand-icon">{student.snum}</span></td>
		  	<td>{student.username}</td>
		  	<td>{student.userrole}</td>
			</tr>

			<tr className="table-expand-row-content">
			  <td colspan="8" className="table-expand-row-nested">
			    <p></p>
			  </td>
			</tr>
		</tbody>
  );
};


export default ClassListRow;