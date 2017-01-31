import React, { PropTypes } from 'react';
import { Form, FormField, FormSelect, Button } from 'elemental';
import Module from '../../../components/Module/Module';
import { createTeamRequest } from '../../../../app/ajax';
import config from '../../../config';

class CreateTeam extends React.Component {
  constructor() {
    super();
    this.state = { newTeamArray: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.renderDropdowns = this.renderDropdowns.bind(this);
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
          alert(`Success: Team ${response} created!`);
          window.location.reload(true);
        })
        .catch(alert);
    }
  }

  handleSelect(value, index) {
    const temp = this.state.newTeamArray;
    temp[index] = value;
    this.setState({ newTeamArray: temp });
  }

  renderDropdowns() {
    const arr = [];
    for (let index = 0; index < config.teamSize; index++) {
      arr.push((<FormSelect
        key={index.toString()}
        options={
          (index === 0 && this.props.isAdmin !== 'true')
            ? [{ label: this.props.studentName }]
            : this.props.namesArray
        }
        firstOption="Select"
        onChange={(e) => this.handleSelect(e, index)}
      />));
    }
    return arr;
  }

  render() {
    return (
      <Module title="Create Team" initialHideContent={false}>
        {this.props.namesArray
          ? (
            <Form onSubmit={this.handleSubmit}>
              <FormField id="text-center">
                {this.renderDropdowns()}
                <Button size="sm" submit>Form Team</Button>
              </FormField>
            </Form>)
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

CreateTeam.propTypes = {
  isAdmin: PropTypes.bool,
  namesArray: PropTypes.arrayOf(PropTypes.any),
  studentName: PropTypes.string,
};

export default CreateTeam;
