import React from 'react'
import { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

function CreateMentor() {
  const [message,setMessage] = useState('')
  const mentorformik = useFormik({
    initialValues: {
      name: "",
      mailid: "",
      contactno: "",
      yearsofExp: "",
    },
    validate: (values) => {
        let error = {}
      if ((values.name == "")) {
        error.name = "Please Enter Student Name";
      }
      if ((values.mailid == "")) {
        error.mailid = "Please Enter Student Mail ID";
      }
      if ((values.contactno == "")) {
        error.contactno = "Please Enter Student Contact No";
      }
      if ((values.yearsofExp == "")) {
        error.yearsofExp = "Please Enter Experience";
      }
      return error;
    },
    onSubmit: async (values,{resetForm}) => {
      try{
        const res = await axios.post(
          "https://assign-mentor-heib.onrender.com/creatementor",
          values
        );
        setMessage(res.message)
        resetForm();
      }catch(error){
          setMessage('Error: Unable to submit the form.')
      }
      alert(message)
    },
  });
  return (
    <form className="container" onSubmit={mentorformik.handleSubmit}>
      <h3 className="text-center">ENTER STUDENT DETAILS</h3>
      <div className="row">
        <div className="form-group">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Name
          </label>
          <input
            type="text"
            className="col-sm-10"
            name="name"
            id="name"
            placeholder="Mentor Name"
            value={mentorformik.values.name}
            onChange={mentorformik.handleChange}
            style={{
                borderColor:
                mentorformik.getFieldMeta("name").error &&
                mentorformik.getFieldMeta("name").touched &&
                  "red",
              }}
  
          />
        </div>
        <div className="form-group">
          <label htmlFor="mailid" className="col-sm-2 col-form-label">
            Mail ID
          </label>
          <input
            type="text"
            className="col-sm-10"
            id="mailid"
            name="mailid"
            placeholder="Mail ID"
            value={mentorformik.values.mailid}
            onChange={mentorformik.handleChange}
            style={{
                borderColor:
                mentorformik.getFieldMeta("mailid").error &&
                mentorformik.getFieldMeta("mailid").touched &&
                "red",
              }}  
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactno" className="col-sm-2 col-form-label">
            Contact Number
          </label>
          <input
            type="text"
            className="col-sm-10"
            id="contactno"
            name="contactno"
            placeholder="Contact Number"
            value={mentorformik.values.contactno}
            onChange={mentorformik.handleChange}
            style={{
                borderColor:
                mentorformik.getFieldMeta("contactno").error &&
                mentorformik.getFieldMeta("contactno").touched &&
                "red",
              }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="yearsofexp" className="col-sm-2 col-form-label">
            Experience in years
          </label>
          <input
            type="text"
            className="col-sm-10"
            id="yearsofExp"
            name="yearsofExp"
            placeholder="Experience in years"
            value={mentorformik.values.yearsofExp}
            onChange={mentorformik.handleChange}
            style={{
                borderColor:
                mentorformik.getFieldMeta("yearsofExp").error &&
                mentorformik.getFieldMeta("yearsofExp").touched &&
                "red",
              }}
          />
        </div>
        <div className="col-sm-12 text-center">
          <button type="submit" className="btn btn-primary mb-2">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreateMentor