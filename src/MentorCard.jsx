import React from 'react'
import { Link } from 'react-router-dom'

function MentorCard({mentor,index}) {
  return (
        <tr>
            <th scope="row">{index+1}</th>
            <td>{mentor.name}</td>
            <td>{mentor.mailid}</td>
            <td>{mentor.contactno}</td>
            <td>{mentor.coursedesc}</td>
            <td style={{color:"red"}}><Link to={`/studentlisttoupdate/${mentor._id}?mentorName=${mentor.name}`} >Assign Students</Link></td>
            <td style={{color:"red"}}><Link to={`/asignedstudents/${mentor._id}?mentorName=${mentor.name}`} >Assigned Students</Link></td>
        </tr>
  )
}

export default MentorCard