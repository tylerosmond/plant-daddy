import { useEffect, useState } from "react";
import { getAllTickets } from "./services/ticketService";
import "./App.css";

export const App = () => {
  const [allTickets, setAllTickets] = useState([]);
  const [showActiveOnly, setShowActiveOnly] = useState(true);
  const [filteredTickets, setFilteredTickets] = useState([]);

  useEffect(() => {
    getAllTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray);
      console.log("Tickets Set!");
    });
  }, []);

  useEffect(() => {
    if (showActiveOnly) {
      const activeTickets = allTickets.filter(
        (ticket) => ticket.active === true
      );
      setFilteredTickets(activeTickets);
    } else {
      setFilteredTickets(allTickets);
    }
  }, [showActiveOnly, allTickets]);

  return (
    <div className="tickets-container">
      <h2>Events</h2>
      <div>
        <button
          className="filter-btn btn-primary"
          onClick={() => {
            setShowActiveOnly(true);
          }}
        >
          Active
        </button>
        <button
          className="filter-btn btn-secondary"
          onClick={() => {
            setShowActiveOnly(false);
          }}
        >
          Show All
        </button>
      </div>
      <article className="tickets">
        {filteredTickets.map((ticket) => {
          return (
            <section className="ticket" key={ticket.id}>
              <header className="ticket-info">Event #{ticket.id}</header>
              <div>Date: {ticket.dateOfEvent}</div>
              <div>Status: {ticket.active ? "Active" : "Complete"}</div>
              <div>Description: {ticket.description}</div>
              <footer>
                <div className="ticket-info">Assignee:</div>
              </footer>
            </section>
          );
        })}
      </article>
    </div>
  );
};
