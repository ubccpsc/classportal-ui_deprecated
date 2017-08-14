import React from 'react';

const StudentList = ({students}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => 
          <div key={student.id} student={student}>{student.fname} {student.lname}</div>
        )}
      </tbody>
    </table>
  );
};


export default StudentList;