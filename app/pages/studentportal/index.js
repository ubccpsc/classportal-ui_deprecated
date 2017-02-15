import React, { PropTypes } from 'react';
import Logout from '../../modules/common/Logout';
import Deliverables from '../../modules/student/Deliverables';
import DisplayTeam from '../../modules/student/DisplayTeam';
import CreateTeam from '../../modules/common/CreateTeam';

const StudentPortal = (props) => (
  <div>
    <Logout
      username={props.data.myStudentFile.username}
      firstname={props.data.myStudentFile.firstname}
      sid={props.data.myStudentFile.sid}
    />
    {(props.data.myStudentFile.hasTeam === true)
      ? (<DisplayTeam
        myTeamFile={props.data.myTeamFile}
        teammateNames={props.data.namesArray}
      />)
      : (<CreateTeam
        namesArray={props.data.namesArray}
        isAdmin={false}
        studentName={`${props.data.myStudentFile.firstname} ${props.data.myStudentFile.lastname}`}
      />)}
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
