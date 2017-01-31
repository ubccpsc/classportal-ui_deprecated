import React, { PropTypes } from 'react';
import DisplayTeam from '../DisplayTeam';
import CreateTeam from '../../common/CreateTeam';

const Team = (props) => (
  (props.myStudentFile.hasTeam === true)
    ? (<DisplayTeam
      myTeamFile={props.myTeamFile}
      teammateNames={props.namesArray}
    />)
    : (<CreateTeam
      namesArray={props.namesArray}
      isAdmin={false}
      studentName={`${props.myStudentFile.firstname} ${props.myStudentFile.lastname}`}
    />)
);

Team.propTypes = {
  myStudentFile: PropTypes.any, // eslint-disable-line
  myTeamFile: PropTypes.any, // eslint-disable-line
  namesArray: PropTypes.arrayOf(PropTypes.any),
};

export default Team;
