import EmployeeListItem from "./EmployeeListItem"
import '../styles.css'
import employeeList from "../data"




const list = employeeList.map((element, index) => {
  return (
    <EmployeeListItem key={index}
    {...element}
    />
  )
})

export default function EmployeeList() {
  return (
    <>
    <div>
      
    {list}
    </div>
    </>
  )
}
