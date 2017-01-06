import React from 'react';
import Logout from '../../components/shared_modules/Logout';
import Deliverables from './modules/Deliverables';
import Grades from './modules/Grades';
import Team from './modules/Team';
import { loadStudentPortal } from '../../../app/ajax';

class StudentPortal extends React.Component {
  getInitialState() {
    return {
      loaded: false,
      files: {
        myStudentFile: {},
        myTeamFile: {},
        myGradesFile: {},
        deliverablesFile: {},
        namesArray: [],
      },
    };
  }

  componentDidMount() {
    loadStudentPortal(
      (response) => {
        // console.log("StudentPortal.js| Retrieved files:" + JSON.stringify(response, null, 2));
        this.setState({ files: response }, () => {
          this.setState({ loaded: true });
        });
      },
      () => {
        // console.log('error loading files');
      },
    );
  }

  render() {
    return this.state.loaded && (
      <div>
        <Logout
          firstname={this.state.files.myStudentFile.firstname}
          sid={this.state.files.myStudentFile.sid}
          username={localStorage.username}
        />
        <Team />
        <Deliverables
          deliverables={this.state.files.deliverablesFile}
          grades={this.state.files.myGradesFile.grades}
        />
        <Grades />
      </div>
    );
  }
}

export default StudentPortal;
