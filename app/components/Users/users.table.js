import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../actions/user.actions';
import UserList from './user.list';

class UsersTable extends React.Component {
  
  componentWillMount() {
    this.props.dispatch(userActions.getAllUsers());
  }
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className='col-md-12'>
      <h1>Users</h1>
      <div className='col-md-4'>
        <UserList users={this.props.users}/>
      </div>
    </div>
    );
  }
}

UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    users: state.users,
  }
};

export default connect(mapStateToProps)(UsersTable);