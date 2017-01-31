import React, { PropTypes } from 'react';
import { FormInput, FormIconField, Glyph, Button, InputGroup } from 'elemental';
import Module from '../../../components/Module';
import { disbandTeamRequest } from '../../../ajax';
import config from '../../../config';

function disbandTeam(props) {
  if (confirm('Please confirm that you want to disband the team.')) {
    disbandTeamRequest(props.myTeamFile.id)
      .then(() => {
        alert('Team has been disbanded!');
        window.location.reload(true);
      })
      .catch(alert);
  }
}

function renderMembers(teammates) {
  return teammates.map((val, index) => (<InputGroup.Section key={index} grow>
    <FormIconField iconPosition="left" iconKey="mortar-board">
      <FormInput placeholder={` ${val}`} size="sm" disabled />
    </FormIconField>
  </InputGroup.Section>));
}

const RepoButton = (props) => (props.url
  ? (<InputGroup.Section>
    <a href={props.url} target="blank" >
      <Button size="sm" ><Glyph icon="organization" />
        &nbsp; Repo
            </Button>
    </a>
  </InputGroup.Section>)
  : (<InputGroup.Section>
    <Button size="sm" onClick={() => alert('Team repository has not yet been set by the prof.')}>
      <Glyph icon="organization" />&nbsp; Repo
          </Button>
  </InputGroup.Section >));

RepoButton.propTypes = {
  url: PropTypes.string,
};

const DisplayTeam = (props) => (
  <Module title={`Team ${props.myTeamFile.id}`} initialHideContent={false}>
    <div>
      <InputGroup >
        {renderMembers(props.myTeamFile.members)}
        {config.studentsCanDisbandTeams &&
          (<InputGroup.Section>
            <Button size="sm" onClick={disbandTeam}><Glyph icon="tools" />&nbsp; Disband</Button>
          </InputGroup.Section>)}
        <RepoButton url={props.myTeamFile.url} />
      </InputGroup>
    </div>
  </Module>
);

DisplayTeam.propTypes = {
  myStudentFile: PropTypes.any, // eslint-disable-line
  myTeamFile: PropTypes.any, // eslint-disable-line
  namesArray: PropTypes.any, // eslint-disable-line
};

export default DisplayTeam;
