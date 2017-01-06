import React from 'react';
import { Form, FormField, Button } from 'elemental';
import Module from '../../../../components/Module/Module';

class UploadClasslist extends React.Component {
  getInitialState() {
    return ({ files: [] });
  }

  handleChange(event) {
    this.setState({ files: event.target.files });
  }

  render() {
    return (
      <Module id="upload-classlist-module" title="Upload New Classlist" initialHideContent={false}>
        <Form onSubmit={() => { }}>
          <FormField id="text-center">
            <input type="file" accept=".csv" id="inputCSV" onChange={this.handleChange} />
            <Button type="danger" size="sm" submit>Submit</Button>
          </FormField>
        </Form>
      </Module>
    );
  }
}

export default UploadClasslist;
