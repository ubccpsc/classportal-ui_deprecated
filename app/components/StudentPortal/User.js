import React, { PropTypes } from 'react';
import Module from '../Module';

const User = (props) => {
  console.log('props');
  console.log(props);
  return (
    <Module title="User">
      <h5>{props.student.username}</h5>
      <h5>{props.student.csid}</h5>
      <h5>{props.student.snum}</h5>
      <h5>{props.student.firstname}</h5>
      <h5>{props.student.lastname}</h5>
    </Module>
  );
};

User.propTypes = {
  student: PropTypes.shape({
    username: PropTypes.string,
    csid: PropTypes.string,
    snum: PropTypes.string,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
  }),
};

export default User;
