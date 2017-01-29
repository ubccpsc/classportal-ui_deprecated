import React, { PropTypes } from 'react';
import User from '../../modules/student/User';
// import Logout from './modules/Logout';
// import Deliverables from './modules/Deliverables';
// import Grades from './modules/Grades';
// import Team from './modules/Team';
import { loadStudentPortalRequest } from '../../../app/ajax';

// Presentational component that displays the data acquired by the container component
const StudentPortal = (props) => (
  <div>
    <User student={props.data.student} />
  </div>
);
/* <Team />
<Deliverables deliverables={props.student.deliverables} grades={props.student.grades} />
<Grades />*/

StudentPortal.propTypes = {
  data: PropTypes.shape({
    student: PropTypes.shape({
      username: PropTypes.string,
      csid: PropTypes.string,
      snum: PropTypes.string,
      firstname: PropTypes.string,
      lastname: PropTypes.string,
    }),
  }),
  /* team: PropTypes.object,
  grades: PropTypes.object,
  deliverables: PropTypes.object,
  studentsWithoutTeams: PropTypes.array,*/
};

// Container component that carries out the ajax fetch() request for student data.
class StudentPortalContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      data: {},
    };
  }

  componentDidMount() {
    loadStudentPortalRequest()
      .then((response) => {
        console.log(JSON.stringify(response, null, 2));
        this.setState({ data: response }, () => {
          this.setState({ loaded: true });
        });
      })
      .catch(alert);
  }

  render() {
    return this.state.loaded && (<StudentPortal data={this.state.data} />);
  }
}

export default StudentPortalContainer;
