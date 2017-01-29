import React from 'react';
import { Form, FormField, FormSelect, Button } from 'elemental';
import Module from '../../../components/Module/Module';
import { createTeamRequest } from '../../../../app/ajax';
import config from '../../../config';

class CreateTeam extends React.Component {
  getInitialState() {
    return { newTeamArray: [] };
  }

  handleSubmit(e) {
    e.preventDefault();
    const newTeamArray = this.state.newTeamArray;
    let alertMessage = 'Forming team with students: ';

    // check for valid students
    for (let i = 0; i < config.teamSize; i++) {
      // check that there actually is a selected student at this index
      if (!!newTeamArray[i] && typeof newTeamArray[i] === 'string') {
        // check that this student was not previously selected
        for (let j = 0; j < i; j++) {
          if (newTeamArray[i] === newTeamArray[j]) {
            alert('Error: Invalid team.');
            return;
          }
        }
        alertMessage += `${newTeamArray[i]} `;
      } else {
        alert('Error: Invalid team.');
        return;
      }
    }

    if (confirm(alertMessage)) {
      createTeamRequest(newTeamArray)
        .then((response) => {
          // console.log("CreateTeam.js| Success: " + response);
          alert(`Success: Team ${response} created!`);
          window.location.reload(true);
        })
        .catch(alert);
    }
  }

  handleSelect(index, value) {
    if (value) {
      // this.state is immutable, so setState a new array
      const temp = this.state.newTeamArray;
      temp[index] = value;
      this.setState({ newTeamArray: temp });
    } else {
      alert('Error: Bad selection');
    }
  }

  renderForm() {
    const oneOrMoreDropdowns = [];

    // build array of dropdown menus depending on specified team size
    for (let index = 0; index < config.teamSize; index++) {
      if (index === 0 && this.props.isAdmin !== 'true') {
        oneOrMoreDropdowns[index] = this.renderFirstDropdown();
      } else {
        oneOrMoreDropdowns[index] = this.renderDropdown(index);
      }
    }

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormField id="text-center">
          {oneOrMoreDropdowns}
          <Button size="sm" submit>Form Team</Button>
        </FormField>
      </Form>);
  }

  renderDropdown(index) {
    return (
      <FormSelect
        key={index.toString()}
        options={this.props.namesArray}
        firstOption="Select"
        onChange={this.handleSelect(this, index)}
      />);
  }

  renderFirstDropdown() {
    return (
      <FormSelect
        key="first"
        options={[{ label: this.props.studentName }]}
        firstOption="Select"
        onChange={this.handleSelect(this, 0)}
      />);
  }

  render() {
    return (
      <Module id="create-team" title="Create Team" initialHideContent={false}>
        {this.props.namesArray
          ? this.renderForm()
          : (
            <div>
              <h4>Error: No classlist provided.</h4>
              <br />
            </div>)
        }
      </Module>
    );
  }
}

export default CreateTeam;
