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
    <div>
      <div className="employee-title">
        <h1>Employees</h1>
      </div>
      <div className="employees">
        {employees.map((employeeObj) => {
          return <EmployeeUser userObj={employeeObj} key={employeeObj.id} />;
        })}
      </div>
    </div>
  );
};
