import React from 'react';

const AdminBatchDelivTeamListRow  = (props) => (
  <div className="row add-people-section">
    <div className="small-12 medium-6 columns about-people">
      <div className="about-people-author">
        <p className="author-name">
          <input type="hidden" name="user_ids[]" value={ props.student._id } />
          { props.student.lname }
        </p>
        <p className="author-location">
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          { props.student.fname }
        </p>
        <p className="author-mutual">
          You are in the same lab
        </p>
      </div>    
    </div>
    <div className="small-12 medium-6 columns add-friend">
      <div className="add-friend-action">
        <button data-id={ props.student._id } onClick={ props.addUserToTeam } className="button primary small">
          <i className="fa fa-user-plus" aria-hidden="true"></i>
          Add To Team
        </button>
{  /*      <button className="button secondary small">
          <i className="fa fa-user-times" aria-hidden="true"></i>
          Ignore
        </button> */}
      </div>
    </div>
  </div>
);

export default AdminBatchDelivTeamListRow ;
