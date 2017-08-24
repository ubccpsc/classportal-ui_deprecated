import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as deliverableActions from '../../actions/deliverable.actions';
import LoadingMessage from '../../modules/common/LoadingMessage';
import DeliverableListRow from './DeliverableListRow';
import { Link } from 'react-router';
import { Button } from 'elemental';
import { Switch } from 'react-foundation';
import DatePicker from 'react-datepicker';
import moment from 'moment';
require("react-datepicker/dist/react-datepicker-cssmodules.css");

class DeliverableListTable extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      startDateOpen: moment(),
      startDateClose: moment(),
    } 
    this.handleChangeOpen = this.handleChangeOpen.bind(this);
    this.handleChangeClose = this.handleChangeClose.bind(this);
  }
  
  handleChangeClose(date) {
    this.setState({ startDateClose: date });
  }

  handleChangeOpen(date){ 
    this.setState({ startDateOpen: date });
  }

	componentWillMount() {
	}

	render () {
		if (this.props.deliverables.length < 1) {
			return (
				<LoadingMessage />
			);
		}
		else {
			return (
				<div className="table-expand-container">
          <form>
            <fieldset>

              <legend>Create Deliverable</legend>

              <label>Course Number</label>
              <input type="text" value={this.props.courseId} readonly="readonly" />
              <label>Deliverable Source Code</label>
              <input type="text" placeholder="ie. https://github.ubc.ca/pcarter/cpsc210__deliverables" />
              <label>Name</label>
              <input type="text" class="two" placeholder="ie. 'd1', 'p1'" />
              <div className="row">
                <div className="two mobile-one columns">
                  <label className="right inline">Open Date:</label>
                </div>
                <div className="ten mobile-three columns">
                  <DatePicker
                    selected={this.state.startDateOpen}
                    onChange={this.handleChangeOpen}
                  />
                </div>
              </div>
              <div className="row">
                <div className="two mobile-one columns">
                  <label className="right inline">Close Date:</label>
                </div>
                <div className="ten mobile-three columns">
                  <DatePicker
                    selected={this.state.startDateClose}
                    onChange={this.handleChangeClose}
                  />
                </div>
              </div>
              <div className="row">
                <div className="two mobile-one columns">
                  <label className="right inline">Grades Released</label>
                </div>
                <div className="ten mobile-three columns">
                  <Switch input={{ name: 'gradesReleased' }} />
                </div>
              </div>
            </fieldset>
          </form>
					<Link onClick={this.toggleEdit} isActiveclassName="is-active"><Button>Submit Deliverable</Button></Link>
				</div>
			);
		}
	}
}

DeliverableListTable.propTypes = {
  deliverables: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
}

function mapStateToProps(state, ownState) {
	return {
    deliverables: state.deliverables,
    courses: state.courses
	}
}

export default connect(mapStateToProps)(DeliverableListTable);