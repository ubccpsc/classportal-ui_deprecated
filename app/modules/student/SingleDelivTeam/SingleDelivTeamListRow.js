
import React from 'react';

const SingleDelivTeamListRow = (student) => (
  <div className="row add-people-section">
    <div className="small-12 medium-6 columns about-people">
      <div className="about-people-author">
        <p className="author-name">
          { student.lname }
        </p>
        <p className="author-location">
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          { student.fname }
        </p>
        <p className="author-mutual">
          You are in the same lab
        </p>
      </div>    
    </div>
    <div className="small-12 medium-6 columns add-friend">
      <div className="add-friend-action">
        <button className="button primary small">
          <i className="fa fa-user-plus" aria-hidden="true"></i>
          Add Team Member
        </button>
{  /*      <button className="button secondary small">
          <i className="fa fa-user-times" aria-hidden="true"></i>
          Ignore
        </button> */}
      </div>
    </div>
  </div>
);

export default SingleDelivTeamListRow;
