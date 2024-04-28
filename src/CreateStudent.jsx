import { useFormik } from "formik";
import React, { useState } from "react";
import axios from "axios";

function CreateStudent() {
  const [message,setMessage] = useState('')
  const studentformik = useFormik({
    initialValues: {
      name: "",
      mailid: "",
      contactno: "",
      coursedesc: "",
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
      if ((values.coursedesc == "")) {
        error.coursedesc = "Please Enter Course Description";
      }
      return error;
    },
    onSubmit: async (values,{resetForm}) => {
      try{
        const res = await axios.post(
          "https://assign-mentor-heib.onrender.com/createstudent",
          values
        );
        setMessage(res.data.message)
        resetForm();
      }catch(error){
          setMessage('Error: Unable to submit the form.')
      }
      alert(message)
    },
  });
  return (
    <form className="container" onSubmit={studentformik.handleSubmit}>
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
            placeholder="Student Name"
            value={studentformik.values.name}
            onChange={studentformik.handleChange}
            style={{
                borderColor:
                  studentformik.getFieldMeta("name").error &&
                  studentformik.getFieldMeta("name").touched &&
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
            value={studentformik.values.mailid}
            onChange={studentformik.handleChange}
            style={{
                borderColor:
                studentformik.getFieldMeta("mailid").error &&
                studentformik.getFieldMeta("mailid").touched &&
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
            value={studentformik.values.contactno}
            onChange={studentformik.handleChange}
            style={{
                borderColor:
                studentformik.getFieldMeta("contactno").error &&
                studentformik.getFieldMeta("contactno").touched &&
                "red",
              }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="coursedesc" className="col-sm-2 col-form-label">
            Courese Detail
          </label>
          <input
            type="text"
            className="col-sm-10"
            id="coursedesc"
            name="coursedesc"
            placeholder="Course Detail"
            value={studentformik.values.coursedesc}
            onChange={studentformik.handleChange}
            style={{
                borderColor:
                studentformik.getFieldMeta("coursedesc").error &&
                studentformik.getFieldMeta("coursedesc").touched &&
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

export default CreateStudent;
