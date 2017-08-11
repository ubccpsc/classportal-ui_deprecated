import React, { PropTypes } from 'react';
import Logout from '../../modules/common/Logout';
import Deliverables from '../../modules/student/Deliverables';
import DisplayTeam from '../../modules/student/DisplayTeam';
import CreateTeam from '../../modules/common/CreateTeam';

const StudentPortal = (props) => (
  <div>{JSON.stringify(props)}
    <Logout
      username={props.username}
      firstname={props.fname}
      sid={props.sid}
    />

  </div>
);

StudentPortal.propTypes = {
  data: PropTypes.any, // eslint-disable-line
};

export default StudentPortal;
