import React, { PropTypes } from 'react';
import _ from 'lodash';
import { Modal, ModalHeader, ModalFooter, ModalBody, Button } from 'elemental';
import Module from '../../../components/Module';

class Deliverables extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      assnId: '',
    };
    this.returnGradeAndComment = this.returnGradeAndComment.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderTable = this.renderTable.bind(this);
    this.renderOneRow = this.renderOneRow.bind(this);
  }

  returnGradeAndComment(assnId) {
    const thisGrade = _.find(this.props.grades, { assnId });

    if (thisGrade !== undefined) {
      return { grade: thisGrade.grade, comment: thisGrade.comment };
    }

    return { grade: '', comment: '' };
  }

  openModal(assnId) {
    this.setState({ assnId }, () => {
      this.setState({ modalIsOpen: true });
    });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  renderTable() {
    const that = this;
    const delivs = [];
    for (let index = 0; index < this.props.deliverables.length; index++) {
      delivs.push(that.renderOneRow(index));
    }
    return delivs;
  }

  renderOneRow(index) {
    const deliverable = this.props.deliverables[index];
    return (
      <tr key={index}>
        <td className="tg-edam">
          <a href={deliverable.url} target="blank" >{deliverable.name}</a>
        </td>
        <td className="tg-edam">{deliverable.open}</td>
        <td className="tg-edam">{deliverable.due}</td>
        <td className="tg-yw4l">
          {deliverable.gradesReleased && !!this.returnGradeAndComment(deliverable.id).grade
            ? this.returnGradeAndComment(deliverable.id).grade : '-'}
        </td>
        <td className="tg-yw4l">
          {deliverable.gradesReleased && !!this.returnGradeAndComment(deliverable.id).comment ?
            (
              <Button
                size="sm"
                className="button-text"
                type="link-text"
                onClick={this.openModal(this, deliverable.id)}
              >
                View
            </Button>) : '-'}
        </td>
      </tr>
    );
  }

  render() {
    return (
      <Module id="deliverables-module" title="Deliverables" initialHideContent={false}>
        <table className="tg">
          <tbody>
            <tr>
              <th className="tg-yw4l">Deliverable</th>
              <th className="tg-yw4l">Open</th>
              <th className="tg-yw4l">Due</th>
              <th className="tg-yw4l">Grade</th>
              <th className="tg-yw4l">Comment</th>
            </tr>
            {!!this.props.deliverables && this.renderTable()}
          </tbody>
        </table>

        <Modal isOpen={this.state.modalIsOpen} onCancel={this.closeModal} backdropClosesModal>
          <ModalHeader text="View Comment" showCloseButton onClose={this.closeModal} />
          <ModalBody>
            <p>{this.returnGradeAndComment(this.state.assnId).comment}</p>
          </ModalBody>
          <ModalFooter>
            <Button type="link-cancel" onClick={this.closeModal}>Close</Button>
          </ModalFooter>
        </Modal>

      </Module>
    );
  }
}

Deliverables.propTypes = {
  grades: PropTypes.any, // eslint-disable-line
  deliverables: PropTypes.any, // eslint-disable-line
};

export default Deliverables;
