import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../actions/user.actions';
import Logout from '../../modules/common/Logout';
import { Row, Column } from 'react-foundation';
import SuperAdminCourseList from '../../components/Course/SuperAdminCourseList';
import DeliverableListTable from '../../components/Deliverable/DeliverableListTable';
import { browserHistory } from 'react-router';

class SuperAdminPortal extends React.Component {
  constructor() {
    super();
    this.authCheck = this.authCheck.bind(this);
  }

  componentWillMount() {
  
    this.props.dispatch(userActions.getCurrentUser())
      .then(() => {
        this.authCheck();
      });
  }

  authCheck() {
    if (this.props.user.userrole !== 'student') {
      this.props.dispatch(userActions.getCurrentUser()).then(response => {
        if (this.props.user.userrole !== 'student') {
          browserHistory.push(`/404`);
        }
      });
    }
  }

  render() {
    return (
        <Column className="hereIaM">{this.props.children}</Column>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  }
}

SuperAdminPortal.propTypes = {
  user: PropTypes.object
};

export default connect(mapStateToProps)(SuperAdminPortal);