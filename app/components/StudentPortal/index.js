import React, { PropTypes } from 'react';
import Logout from '../../modules/common/Logout';
// import Deliverables from '../../modules/student/Deliverables';
// import Grades from '../../modules/student/Grades';
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
  </div>
);

/*
<Deliverables deliverables={props.data.deliverables} grades={props.data.grades} />
<Grades />
*/
StudentPortal.propTypes = {
  data: PropTypes.any, // eslint-disable-line
};
  /* shape({
    student: PropTypes.shape({
      username: PropTypes.string,
      csid: PropTypes.string,
      snum: PropTypes.string,
      firstname: PropTypes.string,
      lastname: PropTypes.string,
    }),
  }),
  /* team: PropTypes.object,
  grades: PropTypes.object,
  deliverables: PropTypes.object,
  studentsWithoutTeams: PropTypes.array,*/

export default StudentPortal;
