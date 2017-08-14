import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as studentActions from '../../actions/student.actions';
import StudentList from './StudentList';
import LoadingMessage from '../../modules/common/LoadingMessage';

class StudentTable extends React.Component {
  
  componentWillMount() {
    this.props.dispatch(studentActions.getAllStudents(310));
  }
  
  constructor() {
    super();
  }

  render() {
    if (this.props.students.length < 1) {
      return (
        <LoadingMessage />
      );
    }
    else {
      return (
        <div className='col-md-12'>
          <h1>Students</h1>
          <div className='col-md-4'>
            <StudentList students={this.props.students}/>
          </div>
        </div>
        );
    }
  }
}

StudentTable.propTypes = {
  students: PropTypes.array.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    students: state.students,
  }
};

export default connect(mapStateToProps)(StudentTable);