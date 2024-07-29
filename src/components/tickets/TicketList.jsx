import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/ticketService";
import "./Tickets.css";
import { Ticket } from "./Ticket";

export const TicketList = () => {
  const [allTickets, setAllTickets] = useState([]);
  const [showActiveOnly, setShowActiveOnly] = useState(true);
  const [filteredTickets, setFilteredTickets] = useState([]);

  useEffect(() => {
    getAllTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray);
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
    <div>
      <div className="tickets-title">
        <h1>Events</h1>
      </div>
      <div className="tickets-container">
        <div>
          <button className="new-event-btn btn-info">New Event</button>
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
          {filteredTickets.map((ticketObj) => {
            return <Ticket ticket={ticketObj} key={ticketObj.id} />;
          })}
        </article>
      </div>
    </div>
  );
};
