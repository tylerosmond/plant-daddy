/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getAllEmployees } from "../../services/employeeService";
import { deleteTicket } from "../../services/ticketService";
import { Link } from "react-router-dom";

export const Ticket = ({ ticket, currentUser, getAndSetTickets }) => {
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

  const handleDelete = () => {
    deleteTicket(ticket.id).then(() => {
      getAndSetTickets();
    });
  };

  return (
    <section className="ticket">
      <div className="ticket-details">
        <header className="ticket-info">
          <h2>Event #{ticket.id}</h2>
        </header>
        <div className="ticket-details-2">
          <div>Date: {ticket.dateOfEvent}</div>
          <div>Description: {ticket.description}</div>
        </div>
        <div>
          <div className="ticket-info">Plant Package:</div>
          <div>{ticket.package.name}</div>

          <img
            className="package-image"
            src={ticket.package.image}
            alt="plant package image"
          />
        </div>
      </div>
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
        <div>
          {!currentUser?.isStaff && ticket.active ? (
            <button className="btn btn-secondary edit-btn">
              <Link to={`/events/${ticket.id}/edit`}>Edit</Link>
            </button>
          ) : (
            ""
          )}
          {!currentUser?.isStaff && ticket.active ? (
            <button className="btn btn-warning" onClick={handleDelete}>
              Delete
            </button>
          ) : (
            ""
          )}
        </div>
      </footer>
    </section>
  );
};
