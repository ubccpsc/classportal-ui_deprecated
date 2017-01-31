/* eslint-disable no-useless-escape */

import React from 'react';
import { browserHistory } from 'react-router';
import PostLogin from '../../modules/common/PostLogin';
import { loginRequest } from '../../../app/ajax';

function getCode() {
  return new Promise((resolve, reject) => {
    try {
      const url = window.location.href;
      const validAuthCode = /[?]code=([\w\/\-]+)/;
      if (validAuthCode.test(url)) {
        const authcode = url.split('code=')[1];
        resolve(authcode);
      } else {
        reject('Error: Invalid authcode.');
      }
    } catch (err) {
      reject(err);
    }
  });
}

class PostLoginPage extends React.Component {
  constructor() {
    super();
    this.state = { error: false };
    this.sendCode = this.sendCode.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  componentDidMount() {
    getCode()
      .then(this.sendCode)
      .catch(this.handleError);
  }

  /**
 * .catch() handler for postloging authentication.
 * Alerts the user with the error, then redirects to login page.
 */
  handleError(error) {
    alert(error);
    localStorage.clear();
    this.setState({ error: true }, () => {
      // display error message for 3 seconds before redirecting to login
      setTimeout(() => {
        browserHistory.push('/');
      }, 2500);
    });
  }


  sendCode(authcode) {
    loginRequest(localStorage.csid ? localStorage.csid : '', localStorage.sid ? localStorage.sid : '', authcode)
      .then((response) => {
        const token = response.token;
        const username = response.username;
        const admin = response.admin;

        if (!!username && !!token) {
          localStorage.clear();
          localStorage.setItem('token', token);
          localStorage.setItem('username', username);
          localStorage.setItem('admin', admin);
          browserHistory.push('/');
          return Promise.resolve();
        }
        return Promise.reject('Error loading user info.');
      })
      .catch(this.handleError);
  }

  render() {
    return (
      <PostLogin error={this.state.error} />
    );
  }

}

export default PostLoginPage;
