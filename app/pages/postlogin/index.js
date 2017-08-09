import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../actions/user.actions';
import { browserHistory } from 'react-router';
import PostLogin from '../../modules/common/PostLogin';
import { loginRequest, testGet } from '../../../app/ajax';

class PostloginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  componentDidMount() {
    this.props.dispatch(userActions.fetchCurrentUser());

    return Promise.resolve()
        .then(() => {
        const url = window.location.href;
        // this is where we should put the "isLoggedIn() API call"
        const validAuthCode = /[?]code=([\w\/\-]+)/; // eslint-disable-line no-useless-escape
        if (validAuthCode.test(url)) {
          const authcode = url.split('code=')[1];
          return Promise.resolve(authcode);
        }
        return Promise.reject('Error: Invalid authcode.');
      })
      .then((authcode) => 
        // then get the current user information and store it in local storage
        // should include csid, snum, user role, and might not need authcode
        loginRequest(localStorage.csid || '', localStorage.sid || '', authcode))
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

PostloginPage.propTypes = {
  user: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
  }
};

export default connect(mapStateToProps)(PostloginPage);