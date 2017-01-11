import React from 'react';
import { FormInput, FormIconField, Glyph, Button, InputGroup } from 'elemental';
import Module from '../../../components/Module/Module';
import { disbandTeamRequest } from '../../../../app/ajax';
import config from '../../../../config/env';

function disbandTeam(props) {
  if (confirm('Please confirm that you want to disband the team.')) {
    disbandTeamRequest(props.myTeamFile.id)
      .then(() => {
        alert('Team has been disbanded!');
        window.location.reload(true);
      })
      .catch(() => {
        alert('Error: team could not be disbanded.');
        window.location.reload(true);
      });
  }
}

function renderMembers(props) {
  const members = [];
  let memberName;

  for (let index = 0; index < config.team_size; index++) {
    memberName = props.teammateNames[index];
    members[index] =
      (<InputGroup.Section key={index} grow>
        <FormIconField iconPosition="left" iconKey="mortar-board">
          <FormInput placeholder={` ${memberName}`} size="sm" disabled />
        </FormIconField>
      </InputGroup.Section>);
  }
  return members;
}

function renderRepoButton(props) {
  function alertOnClick() {
    alert('Team repository has not yet been set by the prof.');
  }

  let button;

  if (!props.myTeamFile.url) {
    button = (
      <InputGroup.Section>
        <Button size="sm" onClick={alertOnClick}>
          <Glyph icon="organization" />&nbsp; Repo
          </Button>
      </InputGroup.Section >);
  } else {
    button = (
      <InputGroup.Section>
        <a href={props.myTeamFile.url} target="blank" >
          <Button size="sm" ><Glyph icon="organization" />
            &nbsp; Repo
            </Button>
        </a>
      </InputGroup.Section>);
  }

  return button;
}

function renderTeam() {
  return (
    <div>
      <InputGroup >
        {renderMembers()}
        {config.students_can_disband_teams &&
          (<InputGroup.Section>
            <Button size="sm" onClick={disbandTeam}><Glyph icon="tools" />&nbsp; Disband</Button>
          </InputGroup.Section>)}
        {renderRepoButton()}
      </InputGroup>
    </div>
  );
}

const DisplayTeam = (props) => (
  <Module id="display-team-module" title={`Team ${props.myTeamFile.id}`} initialHideContent={false}>
    {renderTeam}
  </Module>
);

export default DisplayTeam;
