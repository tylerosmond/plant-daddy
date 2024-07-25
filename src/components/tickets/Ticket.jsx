/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getAllEmployees } from "../../services/employeeService";

export const Ticket = ({ ticket }) => {
  const [employees, setEmployees] = useState([]);
  const [assignedEmployee, setAssignedEmployee] = useState({});

  useEffect(() => {
    getAllEmployees().then((employeesArray) => {
      setEmployees(employeesArray);
    });
  }, []);

  useEffect(() => {
    const foundEmployee = employees.find(
      (employee) => employee.id === ticket.employeeTickets[0]?.employeeId
    );
    setAssignedEmployee(foundEmployee);
  }, [employees, ticket]);

  return (
    <section className="ticket">
      <header className="ticket-info">Event #{ticket.id}</header>
      <div>Date: {ticket.dateOfEvent}</div>
      <div>Description: {ticket.description}</div>
      <footer>
        <div>
          <div className="ticket-info">Employee Assigned:</div>
          <div>
            {assignedEmployee
              ? assignedEmployee.user?.fullName
              : "No Employee Assigned"}
          </div>
        </div>
        <div>
          <div className="ticket-info">Status:</div>
          <div>{ticket.active ? "Active" : "Complete"}</div>
        </div>
      </footer>
    </section>
  );
};
