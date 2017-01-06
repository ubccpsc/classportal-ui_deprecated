import React, { PropTypes } from 'react';
import Module from '../../../components/Module/Module';

function renderGrades() {
  const block = [];
  const grades = this.props.grades;
  const deliverables = this.props.deliverables;

  for (let index = 0; index < deliverables.length; index++) {
    block[index] = (
      <tr key={index}>
        <td className="tg-edam">{deliverables[index].name}</td>
        <td className="tg-yw4l">{grades[index]}</td>
        <td className="tg-yw4l">-</td>
      </tr>);
  }

  // console.log("Grades.js| Rendering grades");
  return (<tbody>{block}</tbody>);
}

const Grades = (props) => (
  <Module id="gradesModule" title="Grades" initialHideContent={false}>
    <div className="tg-wrap">
      <table className="tg">
        <tbody>
          <tr>
            <th className="tg-yw4l">Assignment</th>
            <th className="tg-yw4l">Grade</th>
            <th className="tg-yw4l">Class Average</th>
          </tr>
        </tbody>
        {!!props.grades && !!props.deliverables && renderGrades()}
      </table>
    </div>

  </Module>
);

Grades.propTypes = {
  grades: PropTypes.string,
  deliverables: PropTypes.string,
};

export default Grades;
