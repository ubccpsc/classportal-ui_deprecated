import React, { PropTypes } from 'react';
import FlashMessage from './FlashMessage';
import { connect } from 'react-redux';
import { Row, Column } from 'react-foundation';

class FlashMessageList extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		if (this.props.flashMessage.length > 0) {

			let messages = this.props.flashMessage.map(message => {
				return (<FlashMessage key={message.id} message={message}/>);
			});

			return (
				<div className="columns small-12 large-centered">{messages}</div>
				)

		} else {
			return (
				null
				)
		}

	}
}

FlashMessageList.propTypes = {
	flashMessage: React.PropTypes.array.isRequired
}

function mapStateToProps(state, ownState) {
	return {
		flashMessage: state.flashMessage
	}
}

export default connect(mapStateToProps)(FlashMessageList);