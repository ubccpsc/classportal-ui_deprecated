import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class FlashMessage extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { id, type, text, headline} = this.props.message;
		const FAILED_TAG = 'failed';
		const WARNING_TAG = 'warning';

		let statusClass = null;

		if (type === FAILED_TAG) {
			statusClass = 'alert callout';
		} else if (type === WARNING_TAG) {
			statusClass = 'warning callout';
		} else {
			statusClass = 'success callout';
		}

		return (	
			<div className={statusClass}>
			  <h5>{this.props.message.headline}</h5>
			  <p>{this.props.message.body}</p>
			  <button className="close-button" aria-label="Dismiss alert" type="button">
			    <span aria-hidden="true">&times;</span>
			  </button>
			</div>
			);
	}

}

FlashMessage.propTypes = {
	message: React.PropTypes.object.isRequired
}

function mapStateToProps(state, ownState) {
	return {
		message: state.message,
	}
}

export default FlashMessage;