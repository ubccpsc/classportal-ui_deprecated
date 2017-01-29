import React from 'react';
import AdminTeams from '../../modules/admin/AdminTeams';
import CreateProjects from '../../modules/admin/CreateProjects';
import CreateTeam from '../../modules/common/CreateTeam';

const AdminTeamsView = (props) => (
  <div>
    <AdminTeams
      teams={props.files.teamsFile}
      students={props.files.studentsFile}
      admins={props.files.adminsFile}
      myAdminIndex={props.files.myAdminIndex}
    />
    <CreateTeam
      namesArray={props.files.namesArray}
      isAdmin="true"
      studentName="null"
    />
    {
      props.files.adminsFile[props.files.myAdminIndex].prof === true
      && (<CreateProjects />)
    }
  </div>
);

export default AdminTeamsView;
