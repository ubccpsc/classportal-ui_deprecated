import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as studentActions from '../../actions/student.actions';
import StudentCourseList from './StudentCourseList';
import LoadingMessage from '../../modules/common/LoadingMessage';
import StudentCourseListUpload from './StudentCourseListUpload';

class StudentCourseTable extends React.Component {
  
  componentWillMount() {
    this.props.dispatch(studentActions.getAllStudents(310));
  }
  
  constructor() {
    super();
  }

  render() {
    if (!this.props.students) {
      return (
        <LoadingMessage />
      );
    }
    else {
      return (
        <div className=''>
          <h1>Students</h1>
          <div className=''>
            <StudentCourseList students={this.props.students}/>
            <StudentCourseListUpload user={this.props.user}/>
          </div>
        </div>
        );
    }
  }
}

StudentCourseTable.propTypes = {
  students: PropTypes.array.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    students: state.students,
  }
};

export default connect(mapStateToProps)(StudentCourseTable);