import React, { useContext } from 'react'
import { ContextWrapper } from './Context'
import MentorCard from './MentorCard';

function MentorList() {
  const {mentors} = useContext(ContextWrapper);
  return (
    <div className="container">
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Mail ID</th>
          <th scope="col">Contact Number</th>
        </tr>
      </thead>
      <tbody>
        {mentors.map((mentor,index) => {
          return <MentorCard key={mentor._id} mentor={mentor} index={index}/>;
        })}
      </tbody>
    </table>
  </div>

  )
}

export default MentorList