import { Link } from "react-router-dom"
import Employee from "./Employee"

export default function EmployeePage (id, pic, firstName, lastName, title, officePhone, email) {
  return (
    <>
      <div id="empPageHeader">
        <Link to="/"><button id="backBtn">Back</button></Link>
      <h2>Employee Details</h2>
      </div>
      <Employee />
    </>
  )
}