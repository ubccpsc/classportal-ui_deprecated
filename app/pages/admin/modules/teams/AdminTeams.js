import React from 'react';
import { Form, FormField, Button } from 'elemental';
import Module from '../../../../components/Module/Module';
import { assignTeamRequest, disbandTeamRequest } from '../../../../ajax';

function toggleView(e) {
  e.preventDefault();
  this.setState({ viewAll: !this.state.viewAll }, () => {
    // console.log("AdminTeams.js| viewAll: " + this.state.viewAll);
  });
}

function include(arr, obj) {
  const result = (arr.indexOf(obj) !== -1);
  // console.log('AdminStudents.js| Checking if ' + obj
  // + ' exists in ' + JSON.stringify(arr) + '. Result: ' + result.toString());
  return (result);
}

function returnStudent(studentNum) {
  const students = this.props.students;
  // search students file for matching sid
  for (let index = 0; index < students.length; index++) {
    if (students[index].sid === studentNum) {
      return students[index];
    }
  }
  return 'null';
}

function editGrades(event) {
  event.preventDefault();
  alert('Team grading not yet implemented.');
}

function addSelfToTeam(event) {
  event.preventDefault();
  if (confirm(`Would you like to assign yourself to team ${event.target.id}?`)) {
    assignTeamRequest(
      localStorage.username,
      event.target.id,
      () => {
        alert('Success!');
        window.location.reload(true);
      },
      () => {
        alert('Error: admin was not added.');
      },
    );
  }
}

function disbandTeam(event) {
  if (confirm(`Please confirm that you want to disband team ${event.target.id}.`)) {
    disbandTeamRequest(
      event.target.id,
      () => {
        alert('Team has been disbanded!');
        window.location.reload(true);
      },
      () => {
        alert('Error: team could not be disbanded.');
        window.location.reload(true);
      },
    );
  }
}

function renderTeamMembers(members) {
  const links = [];

  for (let i = 0; i < members.length; i++) {
    const studentFile = returnStudent(members[i]);
    const studentName = `${studentFile.firstname} ${studentFile.lastname}`;
    if (studentFile.username) {
      links[i] = (
        <a
          key={i}
          href={`http://github.com/${studentFile.username}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {i !== members.length - 1 ? `${studentName}, ` : studentName}
        </a>);
    } else {
      links[i] = (<p key={i}>{studentName}</p>);
    }
  }
  return links;
}

function renderTAs(teamId) {
  const admins = this.props.admins;
  const TAs = [];
  for (let i = 0; i < admins.length; i++) {
    if (include(admins[i].teams, teamId.toString())) {
      TAs[i] = `${admins[i].firstname} `;
    }
  }
  return TAs.length > 0 ? TAs : 'None';
}

function renderOneTeam(teamId) {
  const allTeams = this.props.teams;
  let thisTeam;
  for (let i = 0; i < allTeams.length; i++) {
    if (allTeams[i].id === teamId) {
      thisTeam = allTeams[i];
    }
  }
  return (
    <tr key={thisTeam.id}>
      <td className="tg-yw4l">{thisTeam.id}</td>
      <td className="tg-yw4l">
        {thisTeam.url ?
          <a href={thisTeam.url} target="blank" >View</a>
          : 'Not set'}</td>
      <td className="tg-edam">
        {renderTeamMembers(thisTeam.members)}
      </td>
      <td className="tg-yw4l">
        {renderTAs(thisTeam.id)}
      </td>
      <td className="tg-yw4l">
        <Button id={thisTeam.id} size="sm" className="button-text" onClick={editGrades} type="link-text">Open</Button>
      </td>
      <td className="tg-yw4l">
        {this.props.admins[this.props.myAdminIndex].prof === true ?
          <Button id={thisTeam.id} size="sm" className="button-text" onClick={disbandTeam} type="link-text">Disband</Button>
          : <Button id={thisTeam.id} size="sm" className="button-text" onClick={addSelfToTeam} type="link-text">Add TA</Button>
        }
      </td>
    </tr>
  );
}

function renderTeams() {
  const that = this;
  const teams = [];
  for (let index = 0; index < this.props.teams.length; index++) {
    const thisTeamId = this.props.teams[index].id;
    // if viewAll is true, render all students; otherwise, only render students from myTeams.
    if (that.state.viewAll
      ? true
      : include(
        this.props.admins[this.props.myAdminIndex].teams,
        thisTeamId.toString(),
      )
    ) {
      teams.push(renderOneTeam(thisTeamId));
    }
  }
  return teams;
}

class AdminTeams extends React.Component {
  getInitialState() {
    return { viewAll: true };
  }

  render() {
    return (
      <Module id="admin-teams-module" title={this.state.viewAll ? 'All Teams' : 'My Teams'} initialHideContent={false}>
        <Form id="text-center" onSubmit={toggleView} >
          <FormField>
            <Button type={this.state.viewAll ? 'hollow-primary' : 'primary'} submit size="sm">Toggle</Button>&nbsp;
          </FormField>
        </Form>

        <table className="tg">
          <tbody>
            <tr>
              <th className="tg-yw4l">Team ID</th>
              <th className="tg-yw4l">Repo</th>
              <th className="tg-yw4l">Members</th>
              <th className="tg-yw4l">TAs</th>
              <th className="tg-yw4l">Grades</th>
              <th className="tg-yw4l">Edit</th>
            </tr>
            {renderTeams()}
          </tbody>
        </table>
      </Module>
    );
  }
}

export default AdminTeams;
