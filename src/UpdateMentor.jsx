import { useFormik } from 'formik'
import { useLocation, useNavigate, useParams } from 'react-router';
import React from 'react'
import { useContext } from 'react';
import { ContextWrapper } from './Context';
import axios from 'axios';

function UpdateMentor() {
  const {mentors} = useContext(ContextWrapper)
  const {studentid} = useParams()
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const mentorObjId = queryParams.get('mentorObjId');
  const studentname = queryParams.get('studentname')

  const navigate = useNavigate() 
  const updatementorformik = useFormik({
    initialValues:{
      mentor: mentorObjId=='undefined'?mentors[0]._id:mentorObjId,
    },
    onSubmit:async (values) => {
      try{
        await axios.put(
          `https://assign-mentor-heib.onrender.com/assingonestudent/${studentid}`,
          values
        );
        navigate('/studentlist')
      }catch(error){
          console.log(error.message)
      }
    },
  });
  return (
    <form className = 'container' onSubmit={updatementorformik.handleSubmit}>
      <div className="col-sm-6 m-5">
      <label htmlFor="selectedMentor" style={{marginRight:'3px'}}>{`Select Mentor of ${studentname} : `}</label>
      <select className="custom-select" name='mentor' value={updatementorformik.values.mentor} onChange={updatementorformik.handleChange}>
        {mentors.map((mentor)=>{
        return <option key = {mentor._id} value={mentor._id}>{mentor.name}</option>})}
      </select> 
      </div>
      <div className="col-sm-12 m-5">
          <button type="submit" className="btn btn-primary mb-2">
            Update
          </button>
        </div>
    </form>
  )
}

export default UpdateMentor