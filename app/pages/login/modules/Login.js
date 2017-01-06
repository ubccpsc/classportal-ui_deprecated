import React from 'react';
import { browserHistory } from 'react-router';
import { Form, FormField, Button, Glyph, ButtonGroup } from 'elemental';
import Module from '../../../components/Module/Module';
import config from '../../../../config/env';

function registerButton(e) {
  e.preventDefault();
  browserHistory.push('/register');
}

function loginButton(e) {
  e.preventDefault();
  const redirectUri = `${config.app_address}/postlogin`;
  window.location = `https://github.com/login/oauth/authorize?client_id=${config.client_id}&redirect_uri=${redirectUri}`;
}

const Login = () => (
  <Module title="Login">
    <Form id="text-center">
      <FormField>
        <ButtonGroup>
          <Button id="1" size="sm" onClick={registerButton}>
            <Glyph icon="bookmark" />
            &nbsp; Register Account
              </Button>
          <Button id="2" size="sm" onClick={loginButton}>
            <Glyph icon="mark-github" />
            &nbsp; Log in with GitHub
              </Button>
        </ButtonGroup>
      </FormField>
    </Form>
  </Module>
);

export default Login;
