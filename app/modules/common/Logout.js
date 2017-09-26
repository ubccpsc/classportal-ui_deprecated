import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { FormInput, FormIconField, Glyph, Button, InputGroup } from 'elemental';
import Module from '../../components/Module';
import { logoutRequest } from '../../ajax';
import config from '../../config';
import * as authActions from '../../actions/auth.actions';

// Logs user out of API when user clicks on 'Logout' button
let logoutHandler = function(dispatch) {
  dispatch(authActions.logout())
    .then(() => {
      localStorage.clear();
      browserHistory.push('/login');
    })
    .then(() => {
      dispatch(initialStateActions.reInitState())
    })
    .catch(err => {
      console.log(`Logout::logoutHandler() ERROR ${err} `)
    });
}

class Logout extends React.Component {

  componentWillMount() {
    this.props.dispatch(authActions.isAuthenticated());
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render () {
    if (this.props.authStatus === "Logged in") {
      return (
        <Button className="subnav-hero-signout" size="sm" onClick={() => logoutHandler(this.props.dispatch)}>
          <Glyph icon="sign-out" />&nbsp; Log out
        </Button>
      );
    }
    else {
      return null;
    }
  }
}

Logout.propTypes = {
  authStatus: PropTypes.string,
};

function mapStateToProps(state, ownProps) {
  return {
    authStatus: state.authStatus,
  }
};

export default connect(mapStateToProps)(Logout);

