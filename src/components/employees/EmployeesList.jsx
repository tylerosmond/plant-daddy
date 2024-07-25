import { useEffect, useState } from "react";
import "./Employees.css";
import { getAllEmployees } from "../../services/employeeService";
import { EmployeeUser } from "../users/User";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees().then((employeeArray) => {
      setEmployees(employeeArray);
    });
  }, []);

  return (
    <div className="employees">
      <h2>Employees</h2>
      {employees.map((employeeObj) => {
        return <EmployeeUser userObj={employeeObj} key={employeeObj.id} />;
      })}
    </div>
  );
};
