import React, { PropTypes } from 'react';
import { FormInput, FormIconField, Glyph, Button, InputGroup } from 'elemental';
import Module from '../../components/Module';
import { disbandTeamRequest } from '../../ajax';
import config from '../../config';

const TeamMember = (props) => (
  <InputGroup.Section grow>
    <FormIconField iconPosition="left" iconKey="mortar-board">
      <FormInput placeholder={` ${props.name}`} size="sm" disabled />
    </FormIconField>
  </InputGroup.Section>);

TeamMember.propTypes = {
  name: PropTypes.string,
};

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

const DisbandButton = (props) => {
  const disbandTeam = () => confirm('Please confirm that you want to disband the team.') &&
    disbandTeamRequest(props.id)
      .then(() => {
        alert('Team has been disbanded!');
        window.location.reload(true);
      })
      .catch(alert);

  return (
    <InputGroup.Section >
      <Button size="sm" onClick={disbandTeam}>
        <Glyph icon="tools" />&nbsp; Disband
      </Button>
    </InputGroup.Section >);
};

DisbandButton.propTypes = {
  id: PropTypes.number,
};

const DisplayTeam = (props) => (
  <Module title={`Team ${props.myTeamFile.id}`} initialHideContent={false}>
    <div>
      <InputGroup >
        {props.myTeamFile.members.map((value) =>
          <TeamMember key={value} name={value} />)}
        {config.studentsCanDisbandTeams &&
          <DisbandButton id={props.myTeamFile.id} />}
        <RepoButton url={props.myTeamFile.url} />
      </InputGroup>
    </div>
  </Module>
);

DisplayTeam.propTypes = {
  myTeamFile: PropTypes.any, // eslint-disable-line
};

export { TeamMember, RepoButton, DisbandButton };
export default DisplayTeam;
