import React from 'react';
import { Form, FormField, Button, FormInput, FormIconField, Glyph } from 'elemental';
import Module from '../../../components/Module/Module';
import { registerRequest } from '../../../../app/ajax';
import config from '../../../../config/env';

function handleSubmit(e) {
  e.preventDefault();
  const sid = e.target.elements[0].value;
  const csid = e.target.elements[1].value;

  registerRequest(
    csid,
    sid,
    () => {
      // clear any previously set values in localstorage
      localStorage.clear();

      // set sid and csid for later use by postlogin
      localStorage.setItem('sid', sid);
      localStorage.setItem('csid', csid);

      // login with github
      const clientId = config.client_id;
      const redirectUri = `http://${config.host}:${config.port}/postlogin`;
      window.location = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`;
    },
    (err) => {
      // err message
      alert(`Whoops! Ajax fail:\n${err}`);

      // clear any previously set values in localstorage
      localStorage.clear();
    },
  );
}

const Register = () => (
  <Module title="Register">
    <p>Please confirm your student identity to continue registration.</p>
    <Form onSubmit={handleSubmit} type="horizontal">
      <FormIconField label="UBC Student Number" iconPosition="left" iconKey="mortar-board">
        <FormInput placeholder="eg. 12345678" />
      </FormIconField>
      <FormIconField label="Computer Science ID" iconPosition="left" iconKey="keyboard">
        <FormInput placeholder="eg. a1b2" />
      </FormIconField>
      <FormField offsetAbsentLabel>
        <Button submit>
          <Glyph icon="mark-github" />
          &nbsp; Continue to GitHub
            </Button>
      </FormField>
    </Form>
  </Module>
);

export default Register;
