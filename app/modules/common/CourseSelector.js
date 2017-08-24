import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../actions/user.actions';
import * as adminActions from '../../actions/admin.actions';
import LoadingMessage from '../../modules/common/LoadingMessage';
import config from '../../config';
import { Form, FormField, Button, Glyph, ButtonGroup } from 'elemental';

class CourseSelector extends React.Component {
  
  componentWillMount() {
    this.props.dispatch(userActions.getMyCourses());
  }
  
  constructor() {
    super();
  }

  render() {
    if (!this.props.myCourses) {
      return (
        <LoadingMessage />
      );
    }
    else {
      return (
        <div>
          <ul className="list-group">
            {this.props.myCourses.map(course => 
              <li key={course.courseId} className="list-group-item active">{course.courseId} Selected</li>
            )}
          </ul>
        </div>
      );
    }
  }
}

CourseSelector.propTypes = {
  myCourses: PropTypes.array.isRequired,
  myActiveCourse: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    myCourses: state.myCourses,
    myActiveCourse: state.myActiveCourse,
  }
};

export default connect(mapStateToProps)(CourseSelector);