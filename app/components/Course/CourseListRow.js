import React from 'react';

const CourseListRow = (props) => {

	let courseUsersLink = "./" + props.course.courseId + "/students";

	return (
		<tbody>
			<tr className="table-expand-row" data-open-details>
		  	<td><a href={courseUsersLink}>{props.course.courseId}</a></td>
		  	<td>deliverables</td>
		  	<td className="text-right">{props.course.name}</td>
		  	<td>{props.course.icon}<span className="expand-icon"></span></td>
			</tr>

			<tr className="table-expand-row-content">
			  <td colspan="8" className="table-expand-row-nested">
			    <p>info</p>
			  </td>
			</tr>
		</tbody>
		)
}

export default CourseListRow;