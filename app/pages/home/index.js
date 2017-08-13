import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import AdminPortal from '../adminportal';
import SuperAdminPortal from '../superadminportal';
import StudentPortal from '../studentportal';
import LoadingMessage from '../../modules/common/LoadingMessage';
import { loadPortalRequest } from '../../../app/ajax';
import * as userActions from '../../actions/user.actions';
import { browserHistory } from 'react-router';
import PostLogin from '../../modules/common/PostLogin';

class HomePage extends React.Component {

  componentWillMount() {
    this.props.dispatch(userActions.getCurrentUser());
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    if (!this.props.user) {
      return (<LoadingMessage />);
    }

    switch(this.props.user.userrole) {
      case 'superadmin':
        return (<SuperAdminPortal user={this.props.user} />)
      case 'admin':
        return (<AdminPortal user={this.props.user} />);
      case 'student':
        return (<StudentPortal user={this.props.user} />);
      default:
        return null;
    }

  }
}

HomePage.propTypes = {
  user: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
  }
};

export default connect(mapStateToProps)(HomePage);