import React from 'react';
import DisplayTeam from '../DisplayTeam';
import CreateTeam from '../../common/CreateTeam';

function renderTeamDisplay(props) {
  let renderTeam;
  if (props.myStudentFile.hasTeam === true) {
    renderTeam = (
      <DisplayTeam
        myTeamFile={props.myTeamFile}
        teammateNames={props.namesArray}
      />
    );
  } else {
    renderTeam = (
      <CreateTeam
        namesArray={props.namesArray}
        isAdmin="false"
        studentName={`${props.myStudentFile.firstname} ${props.myStudentFile.lastname}`}
      />);
  }
  return renderTeam;
}

const Team = () => renderTeamDisplay();

export default Team;
