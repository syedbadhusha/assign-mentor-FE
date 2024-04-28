import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import { ContextWrapper } from './Context'
import axios from 'axios'

function AssignedStudents() {

    const [studentofMentor,setStudentsofMentor] = useState([])

    const {mentorid} = useParams()
    const {students} = useContext(ContextWrapper)
    const {search}  = useLocation();
    const urlparams = new URLSearchParams(search);
    const mentorName = urlparams.get('mentorName')

    async function getStudentsofMentor(){
        try{
            const res = await axios.get(`https://assign-mentor-heib.onrender.com/studentsundermentor/${mentorid}`)
            setStudentsofMentor(res.data)    
        }catch(error){
            console.log(error.message)
        }
    }

    useEffect(()=>{
        getStudentsofMentor()
    },[])
    

  return (
    <div className="container">
        <h1 className='text-center'>{`Student List of ${mentorName}`}</h1>
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Mail ID</th>
          <th scope="col">Contact Number</th>
          <th scope="col">Course Details</th>
        </tr>
      </thead>
      <tbody>
        {studentofMentor.map((student,index) => {
          return (
          <tr>
            <th scope="row">{index+1}</th>
            <td>{student.name}</td>
            <td>{student.mailid}</td>
            <td>{student.contactno}</td>
            <td>{student.coursedesc}</td>
          </tr>
      );
        })}
      </tbody>
    </table>
  </div>
  )
}

export default AssignedStudents