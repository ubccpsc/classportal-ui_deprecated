import React, { PropTypes } from 'react';

const UserList = ({users}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => 
          <div key={user.id} user={user}>{user.fname} {user.lname}</div>
        )}
      </tbody>
    </table>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
};


export default UserList;