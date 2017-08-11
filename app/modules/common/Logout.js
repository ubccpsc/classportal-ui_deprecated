import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { FormInput, FormIconField, Glyph, Button, InputGroup } from 'elemental';
import Module from '../../components/Module';
import { logoutRequest } from '../../ajax';
import config from '../../config';
import * as authActions from '../../actions/auth.actions';


function logoutSubmit(event) {
  event.preventDefault();
  logoutRequest()
    .then(() => {
      localStorage.clear();
      browserHistory.push('/login');
    })
    .catch(() => {
      // If the logout process fails, we still log the user out.
      localStorage.clear();
      browserHistory.push('/login');
    });
}

class Logout extends React.Component {

  componentWillMount() {
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render () {
    return (
      <Module title={`Welcome, ${this.props.firstname}!`}>
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
            <Button size="sm" onClick={this.props.dispatch(authActions.logout())}>
              <Glyph icon="sign-out" />&nbsp; Log out
                </Button>
          </InputGroup.Section>
        </InputGroup>
      </Module>
    );
  }
}

Logout.propTypes = {
  firstname: PropTypes.string,
  username: PropTypes.string,
  sid: PropTypes.string,
  authStatus: PropTypes.boolean,
};

function mapStateToProps(state, ownProps) {
  return {
    authStatus: state.authStatus,
  }
};

export default connect(mapStateToProps)(Logout);

