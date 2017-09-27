import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as classListActions from '../../actions/classList.actions';
import ClassListRow from './ClassListRow';
import LoadingMessage from '../../modules/common/LoadingMessage';
import ClassListUpload from './ClassListUpload';

class ClassListTable extends React.Component {
  
  componentWillMount() {
    this.props.dispatch(classListActions.getClassList(this.props.params.courses));
  }
  
  constructor() {
    super();
  }

  render() {
    if (!this.props.classList) {
      return (
        <LoadingMessage />
      );
    }
    else {
      return (
      	<div>
					<table className="table-expand">
					  <thead>
					    <tr className="table-expand-row">
					      <th width="200">First Name</th>
					      <th>Last Name</th>
					      <th width="150">CSID</th>
					      <th width="150">SNUM</th>
					      <th>Username</th>
                <th>Userrole</th>
					    </tr>
					  </thead>
			        {this.props.classList.map(student => 
			        	<ClassListRow key={student._id} student={student}/>
			        )}
					</table>
					<ClassListUpload user={this.props.user} courseNum={this.props.params.courses}/>
				</div>
        );
    }
  }
}

ClassListTable.propTypes = {
  classList: PropTypes.array.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    classList: state.classList,
  }
};

export default connect(mapStateToProps)(ClassListTable);