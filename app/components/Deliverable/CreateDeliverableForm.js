import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as deliverableActions from '../../actions/deliverable.actions';
import LoadingMessage from '../../modules/common/LoadingMessage';
import DeliverableListRow from './DeliverableListRow';


class DeliverableListTable extends React.Component {
	constructor(props) {
		super(props);
		this.toggleEdit = false;
	}

	componentWillMount() {
		this.props.dispatch(deliverableActions.getDeliverablesFromCourse(this.props.params.courses));
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
          {/* <!-- Row Layout for forms --> */}
          <form>
            <label>This is a label.</label>
            <input type="text" placeholder="Standard Input" />
            <label>Address</label>
            <input type="text" className="twelve" placeholder="Street" />
            <div className="row">
              <div className="six columns">
                <input type="text" placeholder="City" />
              </div>
              <div className="three columns">
                <input type="text" placeholder="State" />
              </div>
              <div className="three columns">
                <input type="text" placeholder="ZIP" />
              </div>
            </div>
            <textarea placeholder="Message"></textarea>
          </form>

          {/* <!-- Right aligned and inline labels --> */}
          <form>
            <div className="row">
              <div className="two mobile-one columns">
                <label className="right inline">Address Name:</label>
              </div>
              <div className="ten mobile-three columns">
                <input type="text" placeholder="e.g. Home" className="eight" />
              </div>
            </div>
            <div className="row">
              <div className="two mobile-one columns">
                <label className="right inline">City:</label>
              </div>
              <div className="ten mobile-three columns">
                <input type="text" className="eight" />
              </div>
            </div>
            <div className="row">
              <div className="two mobile-one columns">
                <label className="right inline">ZIP:</label>
              </div>
              <div className="ten mobile-three columns">
                <input type="text" className="three" />
              </div>
            </div>
          </form>
					<Link onClick={this.toggleEdit} isActiveclassName="is-active"><Button>Create Deliverable</Button></Link>
				</div>
			);
		}
	}
}

DeliverableListTable.propTypes = {
	deliverables: PropTypes.array.isRequired,
}

function mapStateToProps(state, ownState) {
	return {
		deliverables: state.deliverables
	}
}

export default connect(mapStateToProps)(DeliverableListTable);