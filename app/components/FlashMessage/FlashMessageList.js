import React, { PropTypes } from 'react';
import FlashMessage from './FlashMessage';
import { connect } from 'react-redux';

class FlashMessageList extends React.Component {

	constructor(props) {
		super(props);
		this.props.flashMessage = props.flashMessage;
	}



	render() {

		if (this.props.flashMessage.length > 0) {
			alert(this.props.flashMessage.length)

			let messages = this.props.flashMessage.map(message => {
				return (<FlashMessage key={message.id} message={message}/>);
			});

			console.log(messages);

			return (
				<div>{messages}</div>
				)

		} else {
			return (
				<div>HELLO WORLD!</div>
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