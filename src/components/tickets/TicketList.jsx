import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/ticketService";
import "./Tickets.css";
import { Ticket } from "./Ticket";
import { useNavigate } from "react-router-dom";

export const TicketList = ({ currentUser }) => {
  const [allTickets, setAllTickets] = useState([]);
  const [showActiveOnly, setShowActiveOnly] = useState(true);
  const [filteredTickets, setFilteredTickets] = useState([]);

  const getAndSetTickets = () => {
    getAllTickets().then((ticketsArray) => {
      if (currentUser.isStaff) {
        setAllTickets(ticketsArray);
      } else {
        const customerTickets = ticketsArray.filter(
          (ticket) => ticket.userId === currentUser.id
        );
        setAllTickets(customerTickets);
      }
    });
  };

  useEffect(() => {
    getAndSetTickets();
  }, [currentUser]);

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
  const navigate = useNavigate();

  return (
    <div>
      <div className="tickets-title">
        <h1>Events</h1>
      </div>
      <div className="tickets-container">
        <div className="button-container">
          <button
            className="new-event-btn btn-info"
            onClick={() => {
              navigate("/events/create");
            }}
          >
            New Event
          </button>
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
            return (
              <Ticket
                ticket={ticketObj}
                key={ticketObj.id}
                getAndSetTickets={getAndSetTickets}
              />
            );
          })}
        </article>
      </div>
    </div>
  );
};
