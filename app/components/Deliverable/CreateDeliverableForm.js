import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as delivActions from '../../actions/deliverable.actions';
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
      url: null,
      open: null,
      close: null,
      courseId: this.props.courseId,
      gradesReleased: null,
    } 

    this.handleChange = this.handleChange.bind(this);
    this.submitDeliverable = this.submitDeliverable.bind(this);
    this.handleChangeOpen = this.handleChangeOpen.bind(this);
    this.handleChangeClose = this.handleChangeClose.bind(this);
  }
  
  handleChangeOpen(date){ 
    this.setState({ startDateOpen: date });
    this.setState({ open: date.toDate() });
  }

  handleChangeClose(date) {
    this.setState({ startDateClose: date });
    this.setState({ close : date.toDate() });
  }

  handleChange(e) {
  this.setState({ [e.target.name] : e.target.value })
  console.log(this.state);
  console.log(this.state[e.target.name]);
  }

  createDeliverableObj() {
    let that = this;
    return {
      name: this.state.name,
      url: this.state.url,
      open: this.state.open,
      close: this.state.close,
      gradesReleased: this.state.gradesReleased,
      courseId: this.state.courseId
    }
  }

  submitDeliverable(event) {
    event.preventDefault();
    console.log(`CreateDeliverableForm::submitDeliverable() ${JSON.stringify(this.createDeliverableObj())}`);
    this.props.dispatch(delivActions.createDeliverable(this.createDeliverableObj()));
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
              <input type="text" value={this.props.courseId} onChange={this.handleChange}
                name="courseId" readOnly="readonly" />
              <label>Deliverable Source Code</label>
              <input type="text" name="url" onChange={this.handleChange} value={this.state.url}
                placeholder="ie. https://github.com/CPSC310-2017W-T2/cpsc310_starter_project" />
              <label>Name</label>
              <input type="text" className="two" name="name" value={this.state.name}
                placeholder="ie. 'd1', 'p1'" onChange={this.handleChange} />
              <div className="row">
                <div className="two mobile-one columns">
                  <label className="right inline">Open Date:</label>
                </div>
                <div className="ten mobile-three columns">
                  <DatePicker
                    name="open"
                    value={this.state.startDateOpen.toDate()}
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
                    close="close"
                    value={this.state.startDateClose.toDate()}
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
                  <Switch input={{ type: 'radio', name: 'gradesReleased' }} onChange={this.handleChange} />
                </div>
              </div>
            </fieldset>
          </form>
					<Link onClick={this.submitDeliverable}><Button>Submit Deliverable</Button></Link>
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