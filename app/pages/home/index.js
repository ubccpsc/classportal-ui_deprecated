import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import AdminPortal from '../adminportal';
import SuperAdminPortal from '../superadminportal';
import StudentPortal from '../studentportal';
import LoadingMessage from '../../modules/common/LoadingMessage';
import { loadPortalRequest } from '../../../app/ajax';
import * as userActions from '../../actions/user.actions';
import * as authActions from '../../actions/auth.actions';
import { browserHistory } from 'react-router';
import PostLogin from '../../modules/common/PostLogin';
import config from '../../config';


const UNAUTHENTICATED_TAG = 'Unauthenticated';

class HomePage extends React.Component {

  componentWillMount() {
    this.props.dispatch(authActions.isAuthenticated())
      .then((action) => {
        this.authenticationCheck();
      })
      .catch((err) => {
        this.authenticationCheck();
      })
  }

  constructor(props) {
    super(props);
    this.authenticationCheck = this.authenticationCheck.bind(this);
    this.redirectToLogin = this.redirectToLogin.bind(this)
  }

  componentDidMount() {
  }

  authenticationCheck() {
    console.log(this.props.authStatus);
    let authStatus = String(this.props.authStatus);
    console.log(authStatus);
    if (authStatus === UNAUTHENTICATED_TAG) {
      console.log(config.appPath);
      this.redirectToLogin();
    }
  }

  redirectToLogin() {
    browserHistory.push(config.appAddress + '/login');
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
  authStatus: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    authStatus: state.authStatus,
    user: state.user
  }
};

export default connect(mapStateToProps)(HomePage);