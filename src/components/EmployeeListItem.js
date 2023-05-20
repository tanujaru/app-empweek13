import { Link } from "react-router-dom"

const EmployeeListItem = (props) => {
  return (
    <>
      <div class="employeeCard section">
        <div class="employeePicture">
          <img src={props.pic} alt="employeeHeadshot" id="silhouette" />
        </div>
        <div class="employeeName">
          <Link to={`/employees/${props.id}`}><h2>{props.firstName} {props.lastName}</h2></Link>
          <h3>{props.title}</h3>
        </div>
        <div class="employeeDetails">
          <h4><a href="mailto:#">{props.email}</a></h4>
        </div>
      </div>
    </>
  )
}

export default EmployeeListItem