import React, { PropTypes } from 'react';
import User from '../../modules/student/User';
import Logout from '../../modules/common/Logout';
import Deliverables from '../../modules/student/Deliverables';
import Grades from '../../modules/student/Grades';
import Team from '../../modules/student/Team';

const StudentPortal = (props) => (
  <div>
    <Logout />
    <User student={props.data.student} />
    <Team />
    <Deliverables deliverables={props.student.deliverables} grades={props.student.grades} />
    <Grades />
  </div>
);

StudentPortal.propTypes = {
  data: PropTypes.shape({
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
};

export default StudentPortal;
