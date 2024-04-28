import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CreateStudent from './CreateStudent'
import Dashboard from './Dashboard'
import CreateMentor from './CreateMentor'
import MentorAssignsStudent from './MentorAssignsStudent'
import MentorList from './MentorList'
import StudentList from './StudentList'
import UpdateMentor from './UpdateMentor'
import { ContextWrapper } from './Context'
import { useState,useEffect } from 'react'
import axios from 'axios'
import UpdateMultiStudents from './UpdateMultiStudents'
import AssignedStudents from './AssignedStudents'

function App() {
  const [students, setStudents] = useState([]);
  const [mentors,setMentors]=useState([])
  const [noMentorStudents,setNoMentorStudents] = useState([])

  async function getStudentList() {
    try {
      const res = await axios.get(
        "https://assign-mentor-heib.onrender.com/students"
      );
      setStudents(res.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  async function getMentorsList() {
    try {
      const res = await axios.get(
        "https://assign-mentor-heib.onrender.com/mentors"
      );
      setMentors(res.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  function getMentorName(mentorArr, MentorId) {
    if (!mentorArr || !MentorId) {
      return "No Mentor";
    }
    const selectedMentor = mentorArr.find((mentor) => mentor._id === MentorId);
    return selectedMentor ? selectedMentor.name : "No Mentor";
  }
  async function getNoMentorStudentList() {
    try {
      const res = await axios.get(
        "https://assign-mentor-heib.onrender.com/nonassignedstudents"
      );
      setNoMentorStudents(res.data);
    } catch (error) {
      console.log(error.message);
    }
  }

    useEffect(() => {
    getStudentList();
    getMentorsList();
    getNoMentorStudentList();
  }, []);
  return (
    <ContextWrapper.Provider value={{students, setStudents,mentors,setMentors,getMentorName,noMentorStudents}}>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/createstudent' element={<CreateStudent/>}/>
          <Route path='/creatementor' element={<CreateMentor/>}/>
          <Route path='/mentorassigns' element={<MentorAssignsStudent/>}/>
          <Route path='/mentorlist' element={<MentorList/>}/>
          <Route path='/studentlist' element={<StudentList/>}/>
          <Route path='/updatementor/:studentid' element={<UpdateMentor/>}/>
          <Route path='/studentlisttoupdate/:mentorid' element={<UpdateMultiStudents/>}/>
          <Route path='/asignedstudents/:mentorid' element={<AssignedStudents/>}/>
        </Routes>
    </BrowserRouter>
    </ContextWrapper.Provider>
  )
}

export default App
