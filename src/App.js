import "./styles.css";
//import './App.css';
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import EmployeePage from './components/EmployeePage'
import Employee from "./components/Employee";

function App() {
  return (
    <div className="App">
      <Homepage />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/employees:id" element={<Employee />} />
        <Route path="/employees" element={<EmployeePage />} />
        </Routes>
    </div>
  );
}

export default App;