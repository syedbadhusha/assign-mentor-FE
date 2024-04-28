import { useContext } from "react";
import { ContextWrapper } from "./Context";
import { useFormik } from "formik";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router";

function UpdateMultiStudents() {
  const {search} = useLocation()
  const urlparams = new URLSearchParams(search);
  const mentorName = urlparams.get('mentorName')
  const navigate = useNavigate()
  const { mentors, noMentorStudents } = useContext(ContextWrapper);
  const {mentorid} = useParams() 
  const selectedStudentformik = useFormik({
    initialValues: {
      selectedStudents: [],
    },
    onSubmit: async (values,{resetForm}) => {
        try{
            await axios.put(`https://assign-mentor-heib.onrender.com/assingmentor/${mentorid}`,values.selectedStudents)
            alert(`Students Asigned success fully for ${mentorName}`)
            resetForm()
            navigate('/mentorlist')
        }catch(error){
            console.log(error.message)
        }
    },
  });

  return (
    <form className="container" onSubmit={selectedStudentformik.handleSubmit}>
      <h2 className="text-center">{`Assign Students for ${mentorName}`}</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Mail ID</th>
            <th scope="col">Contact Number</th>
            <th scope="col">Course Details</th>
            <th scope="col">Mentor</th>
            <th scope="col">Select</th>
          </tr>
        </thead>
        <tbody>
          {noMentorStudents.map((student, index) => {
            return (
              <tr key={student._id}>
                <th scope="row">{index + 1}</th>
                <td>{student.name}</td>
                <td>{student.mailid}</td>
                <td>{student.contactno}</td>
                <td>{student.coursedesc}</td>
                <td>
                  {student.mentor == undefined
                    ? "No Mentor"
                    : getMentorName(mentors, student.mentor)}
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="selectedStudents"
                    id="selectedStudents"
                    value={student._id}
                    onChange={selectedStudentformik.handleChange}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UpdateMultiStudents;
