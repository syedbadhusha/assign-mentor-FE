import React, { useContext } from "react";
import StudentCard from "./StudentCard";
import { ContextWrapper } from "./Context";

function StudentList() {
  const {students,mentors} = useContext(ContextWrapper)

  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Mail ID</th>
            <th scope="col">Contact Number</th>
            <th scope="col">Course Details</th>
            <th scope="col">Mentor</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student,index) => {
            return <StudentCard key={student._id} student={student} index={index} mentors={mentors}/>;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
