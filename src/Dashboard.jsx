import { Link } from "react-router-dom"

function Dashboard() {
  return (
    <div className="container">
        <div className="row text-center">
            <div className="col-md-12 m-3" >
                <Link to={'/createstudent'} className="btn btn-dark">Create Student</Link>
            </div>
            <div className="col-md-12 m-3">
                <Link to={'/creatementor'} className="btn btn-dark">Create Mentor</Link>
            </div>
            <div className="col-md-12 m-3">
                <Link to={'/studentlist'} className="btn btn-dark">Student List</Link>
            </div>
            <div className="col-md-12 m-3">
                <Link to={'/mentorlist'} className="btn btn-dark">Mentor List</Link>
            </div>
        </div>
    </div>
  )
}

export default Dashboard