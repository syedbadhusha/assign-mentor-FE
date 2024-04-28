import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextWrapper } from "./Context";

function StudentCard({student,index,mentors}) {
  const {getMentorName} = useContext(ContextWrapper)
  return (
    <tr>
      <th scope="row">{index+1}</th>
      <td>{student.name}</td>
      <td>{student.mailid}</td>
      <td>{student.contactno}</td>
      <td>{student.coursedesc}</td>
      <td>{(student.mentor == undefined)?"No Mentor":getMentorName(mentors,student.mentor)}</td>
      <td style={{color:"red"}}><Link to={`/updatementor/${student._id}?mentorObjId=${student.mentor}&studentname=${student.name}`} >Edit/Add Mentor</Link></td>
    </tr>
  );
}

export default StudentCard;
