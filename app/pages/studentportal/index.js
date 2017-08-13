import React, { PropTypes } from 'react';
import Logout from '../../modules/common/Logout';
import Deliverables from '../../modules/student/Deliverables';
import DisplayTeam from '../../modules/student/DisplayTeam';
import CreateTeam from '../../modules/common/CreateTeam';
import { Row, Column } from 'react-foundation';
import { connect } from 'react-redux';


const StudentPortal = (props) => (
  <div>
    <div className="grid-center-example">
      <Row className="display">
        <Column small={12} centerOnLarge>12 centered, large</Column>
    </Row>
  </div>

  <Logout
    firstname={props.user.fname}
    username={props.user.username}
  />
  </div>
);

StudentPortal.propTypes = {
  user: PropTypes.object, // eslint-disable-line
};

export default StudentPortal;
