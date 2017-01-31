import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { FormInput, FormIconField, Glyph, Button, InputGroup } from 'elemental';
import Module from '../../../components/Module';
import { logoutRequest } from '../../../ajax';

function logoutSubmit(event) {
  event.preventDefault();
  logoutRequest()
    .then(() => {
      localStorage.clear();
      browserHistory.push('/login');
    })
    .catch(() => {
      // If the logout process fails, we still log the user out.
      localStorage.clear();
      browserHistory.push('/login');
    });
}

const Logout = (props) => (
  <Module title={`Welcome, ${props.firstname}!`}>
    <InputGroup >
      <InputGroup.Section grow >
        <FormIconField iconKey="mortar-board" >
          <FormInput
            placeholder={` ${props.sid}`}
            size="sm"
            disabled
          />
        </FormIconField>
      </InputGroup.Section>
      <InputGroup.Section grow>
        <FormIconField iconKey="mark-github" >
          <FormInput
            placeholder={` ${props.username}`}
            size="sm"
            disabled
          />
        </FormIconField>
      </InputGroup.Section>
      <InputGroup.Section>
        <Button size="sm" onClick={logoutSubmit}>
          <Glyph icon="sign-out" />&nbsp; Log out
            </Button>
      </InputGroup.Section>
    </InputGroup>
  </Module>
);

Logout.propTypes = {
  firstname: PropTypes.string,
  username: PropTypes.string,
  sid: PropTypes.string,
};

export default Logout;
