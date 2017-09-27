import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as adminActions from '../../actions/admin.actions';
import AdminListRow from './AdminListRow';
import LoadingMessage from '../../modules/common/LoadingMessage';

class AdminListTable extends React.Component {
  
  componentWillMount() {
    this.props.dispatch(adminActions.getAllAdmins(this.props.params.courses));
  }
  
  constructor() {
    super();
  }

  render() {
    if (!this.props.admins) {
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
			        	<AdminListRow key={student._id} student={student}/>
			        )}
					</table>
				</div>
        );
    }
  }
}

AdminListTable.propTypes = {
  admins: PropTypes.array.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    admins: state.admins,
  }
};

export default connect(mapStateToProps)(AdminListTable);