import React from 'react';
import { Form, Button, FormInput, FormIconField, Glyph } from 'elemental';
import Module from '../../../components/Module/Module';
import { registerRequest } from '../../../../app/ajax';
import config from '../../../../config/env';

const handleSubmit = (e) => {
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
      window.location = `https://github.com/login/oauth/authorize?client_id=${config.client_id}&redirect_uri=${config.app_address}/postlogin`;
    },
    (err) => {
      // err message
      alert(err);
    },
  );
};

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
      <Button submit>
        <Glyph icon="mark-github" />&nbsp;Continue to GitHub
      </Button>
    </Form>
  </Module>
);

export default Register;
