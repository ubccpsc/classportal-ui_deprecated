import React, { PropTypes } from 'react';
import Logout from '../../modules/common/Logout';
import Deliverables from '../../modules/student/Deliverables';
import Team from '../../modules/student/Team';

const StudentPortal = (props) => (
  <div>
    <Logout
      username={props.data.myStudentFile.username}
      firstname={props.data.myStudentFile.firstname}
      sid={props.data.myStudentFile.sid}
    />
    <Team
      myStudentFile={props.data.myStudentFile}
      myTeamFile={props.data.myTeamFile}
      namesArray={props.data.namesArray}
    />
    <Deliverables
      deliverables={props.data.deliverablesFile}
      grades={props.data.myGradesFile.grades}
    />
  </div>
);

StudentPortal.propTypes = {
  data: PropTypes.any, // eslint-disable-line
};

export default StudentPortal;
