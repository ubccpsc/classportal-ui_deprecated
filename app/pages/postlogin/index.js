import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as authActions from '../../actions/auth.actions';
import * as userActions from '../../actions/user.actions';
import { browserHistory } from 'react-router';
import PostLogin from '../../modules/common/PostLogin';
import { loginRequest, testGet } from '../../../app/ajax';
import { Row, Column } from 'react-foundation';

const STUDENT_ROLE = "student";
const ADMIN_ROLE = "admin";


class PostloginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  componentDidMount() {
    this.props.dispatch(authActions.isAuthenticated())
      .then(() => {
        return this.props.dispatch(userActions.getCurrentUser())
          .then(() => {
            let userrole = String(this.props.user.userrole);
            if (userrole === STUDENT_ROLE) {
              browserHistory.push('/student/310/teams');
            } else if (userrole === ADMIN_ROLE) {
              browserHistory.push('/admin/310/teams');
            } else if (userrole === SUPERADMIN_ROLE) {
              browserHistory.push('/superadmin/310/teams');
            }
          });;
      })
  }

  render() {
    return (
            <div className="post-login-page twelve columns">
              <PostLogin />
            </div>
      );
  }

}

PostloginPage.propTypes = {
  user: PropTypes.object.isRequired,
  authStatus: PropTypes.string.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
    authStatus: state.authStatus,
  }
};

export default connect(mapStateToProps)(PostloginPage);