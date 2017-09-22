import React, { PropTypes } from 'react';
import { Link } from 'react-router';


const FlashMessage = (props) => {
	console.log('inside here2 ', props.message);
	const { id, type, text } = props.message;

	return (
				<div>
					sdfasdfjn
					<div className="alert callout" data-closable="">
					  <h5>This is Important</h5>
					  <p>But when youre done reading it, click the close button in the corner to dismiss this alert.</p>
					  <p>Im using the default <code>data-closable</code> parameters, and simply fade out.</p>
					  <button className="close-button" aria-label="Dismiss alert" type="button" data-close="">
					    <span aria-hidden="true">&times;</span>
					  </button>
					</div>
				</div>
			);
}

export default FlashMessage;