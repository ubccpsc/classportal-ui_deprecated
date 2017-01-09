/* eslint-disable no-constant-condition */
/* eslint-disable react/prop-types */

import React from 'react';
import Logout from '../student/modules/Logout';
import { loadAdminPortalRequest } from '../../../app/ajax';

class AdminPortal extends React.Component {
  getInitialState() {
    return {
      loaded: false,
      files: {
        adminsFile: {},
        myAdminIndex: 0,
        studentsFile: {},
        teamsFile: {},
        deliverablesFile: {},
        gradesFile: {},
        namesArray: [],
      },
    };
  }

  componentDidMount() {
    loadAdminPortalRequest(
      (response) => {
        this.setState({ files: response });
      },
      (error) => {
        console.log(`Error loading files: ${error}`);
      },
    );
  }

  renderLogout() {
    let firstname = null;
    let prof = null;

    if (this.state.files.adminsFile.length >= 0) {
      firstname = this.state.files.adminsFile[this.state.files.myAdminIndex].firstname;
      prof = this.state.files.adminsFile[this.state.files.myAdminIndex].prof;
    }

    return (
      <Logout
        firstname={firstname}
        sid={prof ? 'Prof' : 'TA'}
        username={localStorage.username}
      />
    );
  }

  render() {
    // more info: http://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children
    const childrenWithProps = React.Children.map(
      this.props.children,
      (child) => React.cloneElement(child, { files: this.state.files }),
    );

    return (
      <div>
        {this.renderLogout()}
        {this.state.loaded && childrenWithProps}
      </div>
    );
  }
}

export default AdminPortal;
