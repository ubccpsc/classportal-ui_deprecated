import React from 'react';
import { browserHistory } from 'react-router';
import PostLogin from '../../modules/common/PostLogin';
import { loginRequest } from '../../../app/ajax';

class PostloginPage extends React.Component {
  constructor() {
    super();
    this.state = { error: false };
  }

  componentDidMount() {
    return Promise.resolve()
      .then(() => {
        const url = window.location.href;
        const validAuthCode = /[?]code=([\w\/\-]+)/; // eslint-disable-line no-useless-escape
        if (validAuthCode.test(url)) {
          const authcode = url.split('code=')[1];
          return Promise.resolve(authcode);
        }
        return Promise.reject('Error: Invalid authcode.');
      })
      .then((authcode) => loginRequest(localStorage.csid || '', localStorage.sid || '', authcode))
      .then((response) => {
        if (!!response.username && !!response.token) {
          localStorage.clear();
          localStorage.setItem('token', response.token);
          localStorage.setItem('username', response.username);
          localStorage.setItem('admin', response.admin);
          browserHistory.push('/');
          return Promise.resolve();
        }
        return Promise.reject('Error: There was a problem loading user info.');
      })
      .catch((error) => {
        this.setState({ error: true }, () => {
          alert(error);
          localStorage.clear();
          setTimeout(() => {
            browserHistory.push('/');
          }, 1500);
        });
      });
  }

  render() {
    return (<PostLogin error={this.state.error} />);
  }

}

export default PostloginPage;
