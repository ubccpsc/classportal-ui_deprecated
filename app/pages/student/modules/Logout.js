import React from 'react';
import { FormInput, FormIconField, Glyph, Button, InputGroup } from 'elemental';
import { browserHistory } from 'react-router';
import { logoutRequest } from '../../../ajax';

function logoutSubmit(event) {
  event.preventDefault();
  logoutRequest(
    () => {
      localStorage.clear();
      browserHistory.push('/login');
    },
    () => {
      // If the logout process fails, we still log the user out.
      localStorage.clear();
      browserHistory.push('/login');
    },
  );
}

const Logout = () => (
  <div className="module">
    <h3>Welcome, {this.props.firstname}!</h3>
    <InputGroup >
      <InputGroup.Section grow >
        <FormIconField iconKey="mortar-board" >
          <FormInput
            placeholder={` ${this.props.sid}`}
            size="sm"
            disabled
          />
        </FormIconField>
      </InputGroup.Section>
      <InputGroup.Section grow>
        <FormIconField iconKey="mark-github" >
          <FormInput
            placeholder={` ${this.props.username}`}
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
  </div>
);

export default Logout;
