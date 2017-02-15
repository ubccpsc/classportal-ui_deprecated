import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import DisplayTeam, { TeamMember, RepoButton, DisbandButton } from '../../../app/modules/student/DisplayTeam';
import config from '../../../app/config';

describe('DisplayTeam module', () => {
  const testFile = {
    id: 1,
    url: 'test.com',
    members: [
      'member1',
      'member2'
    ]
  };

  const wrapper = shallow(
    <DisplayTeam myTeamFile={testFile} />
  );

  it('renders <TeamMember /> correctly', () => {
    expect(wrapper.contains(
      <TeamMember name="member1" />
    )).to.equal(true);
  });

  it('renders the correct number of <TeamMember />', () => {
    expect(wrapper.find(TeamMember)).to.have.length(2);
  });

  it('renders <RepoButton /> correctly', () => {
    expect(wrapper.contains(
      <RepoButton url="test.com" />
    )).to.equal(true);
  });

  it('renders <DisbandButton /> according to config file', () => {
    expect(wrapper.contains(
      <DisbandButton id={1} />
    )).to.equal(config.studentsCanDisbandTeams);
  });
});
