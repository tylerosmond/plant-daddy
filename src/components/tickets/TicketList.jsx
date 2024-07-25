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
  );
};
