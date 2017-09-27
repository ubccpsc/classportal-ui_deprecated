import React from 'react';

const BatchCurrentTeamListRow = (props) => (
  <div className="row add-people-section">
      <div className="small-12 medium-6 columns about-people">
        <div className="about-people-author">
          <p className="author-name">
          <input type="hidden" name="user_ids[]" value={ props.teamMember._id } />
            { props.teamMember.lname }
          </p>
          <p className="author-location">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            { props.teamMember.fname }
          </p>
          <p className="author-mutual">
            You are in the same lab
          </p>
        </div>    
      </div>
      <div className="small-12 medium-6 columns add-friend">
        <div className="add-friend-action">
          <button className="button primary small" data-id={ props.teamMember._id } onClick={ props.removeUserFromTeam} >
            <i className="fa fa-user-plus" aria-hidden="true"></i>
            Remove from Team
          </button>
  {  /*      <button className="button secondary small">
            <i className="fa fa-user-times" aria-hidden="true"></i>
            Ignore
          </button> */}
        </div>
      </div>
    </div>
);

export default BatchCurrentTeamListRow;
