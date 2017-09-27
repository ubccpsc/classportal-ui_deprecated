import React from 'react';
import { browserHistory } from 'react-router';
import { Form, FormField, Button, Glyph, ButtonGroup } from 'elemental';
import Module from '../../components/Module';
import config from '../../config';

const githubOauth = 'https://github.com/login/oauth/authorize';

function registerButton(e) {
  e.preventDefault();
  browserHistory.push('/register');
}

function loginButton(e) {
  e.preventDefault();
  // const redirectUri = `${config.appAddress}/postlogin`; handled by Github and Passport now.
  window.location = `${config.apiAddress}/auth/login`;
}

const Login = () => (
  <Module title="Login">
    <Form id="text-center">
      <FormField>
        <ButtonGroup>
          <Button id="2" size="sm" onClick={loginButton}>
            <Glyph icon="mark-github" />
            &nbsp; Sign In
              </Button>
        </ButtonGroup>
      </FormField>
    </Form>
  </Module>
);

export default Login;
