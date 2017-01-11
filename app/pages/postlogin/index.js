/* eslint-disable no-useless-escape */

import React from 'react';
import { browserHistory } from 'react-router';
import PostLogin from './modules/PostLogin';
import { loginRequest } from '../../../app/ajax';

function getCode() {
  return new Promise((resolve, reject) => {
    try {
      console.log('getting stuff (takes 5 secs..)');
      setTimeout(() => {
        console.log('got it now.');

        const url = window.location.href;
        const validAuthCode = /[?]code=([\w\/\-]+)/;

        if (validAuthCode.test(url)) {
          const authcode = url.split('code=')[1];
          // console.log("PostLogin.js| Obtained authcode: " + authcode)
          resolve(authcode);
        } else {
          reject('oops');
        }
      }, 5000);
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
  }

  componentDidMount() {
    getCode()
      .then(this.sendCode)
      .catch((e) => console.log(e));
  }

  sendCode(authcode) {
    loginRequest(localStorage.csid ? localStorage.csid : '', localStorage.sid ? localStorage.sid : '', authcode)
      .then((response) => {
        console.log('ajaxsuccess!');
        // console.log('PostLogin.js| Authentication success!
        // Response: ' + JSON.stringify(response));
        const admin = response.admin;
        const username = response.username;
        const token = response.token;

        // clear any previously saved values in localstorage
        localStorage.clear();

        if (!!username && !!token) {
          if (admin === true) {
            // console.log("PostLogin.js| Admin login! Redirecting..");
            localStorage.setItem('username', username);
            localStorage.setItem('token', token);
            localStorage.setItem('admin', 'true');
            browserHistory.push('/admin');
          } else {
            // console.log("PostLogin.js| Student login! Redirecting..");
            localStorage.setItem('username', username);
            localStorage.setItem('token', token);
            browserHistory.push('/');
          }
        } else {
          // bad login, so send back to login page
          this.setState({ error: true }, () => {
            // console.log('Login failed! Redirecting..');
            setTimeout(() => {
              browserHistory.push('/');
            }, 2500);
          });
        }
      })
      .catch((error) => {
        console.log(`ajax fail: ${error}`);
        localStorage.clear();
        this.setState({ error: true }, () => {
          // display error message for 3 seconds before redirecting to login
          setTimeout(() => {
            browserHistory.push('/');
          }, 2500);
        });
      });
  }

  render() {
    return (
      <PostLogin error={this.state.error} />
    );
  }

}

export default PostLoginPage;
