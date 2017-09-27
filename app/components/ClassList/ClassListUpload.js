import React, { PropTypes } from 'react';
import { Form, FormField, Button } from 'elemental';
import Module from '../../components/Module';
import { updateClassRequest } from '../../ajax';
import * as studentActions from '../../actions/student.actions';
import { connect } from 'react-redux';

const API_CLASS_LIST_PROPERTY = 'classList';

class ClassListUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { files: [] };
    this.handleChange = this.handleChange.bind(this);
    this.uploadForm = this.uploadForm.bind(this);
    this.courseNum = props.courseNum;
  }

  handleChange(event) {
    this.setState({ files: event.target.files });
  }

  uploadForm(e) {
    e.preventDefault();

    // check if csv file exists
    if (!this.state.files.length) {
      alert('Error: No file uploaded!');
    } else {
      // transform uploaded csv into formData for sending via ajax
      const csv = new FormData();
      csv.append(API_CLASS_LIST_PROPERTY, this.state.files[0]);

      // POST api/class/list
      this.props.dispatch(studentActions.uploadClassList(this.courseNum, csv))
        .then((response) => {
          console.log(`ClassListUpload::uploadClassList(courseNum) SUCCESS: ${response}`);
        })
        .catch(console.log(`ClassListUpload::uploadClassList(courseNum) ERROR: ${response}`));
    }
  }

  render() {

    if (!this.props.user) {
      return null;
    }
    else if (this.props.user.userrole == 'admin' || this.props.user.userrole == 'superadmin') {
      return (
        <Module id="upload-classlist-module" title="Upload New Classlist" initialHideContent={false}>
          <Form onSubmit={this.uploadForm}>
            <FormField id="text-center">
              <input type="file" accept=".csv" id="inputCSV" onChange={this.handleChange} />
              <Button type="danger" size="sm" submit>Submit</Button>
            </FormField>
          </Form>
        </Module>
      );    
    }
    else {
      return null;
    }
  }
}

ClassListUpload.propTypes = {
  user: PropTypes.object.isRequired,
}

function mapStateToProps(state, ownState) {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(ClassListUpload);
