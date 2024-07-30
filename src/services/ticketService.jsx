export const getAllTickets = () => {
  return fetch(
    `http://localhost:8088/eventTickets?_embed=employeeTickets&_expand=package`
  ).then((res) => res.json());
};

export const updateTicket = (ticket) => {
  return fetch(`http://localhost:8088/eventTickets/${ticket.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ticket),
  });
};

export const deleteTicket = (ticketId) => {
  return fetch(`http://localhost:8088/eventTickets/${ticketId}`, {
    method: "DELETE",
  });
};

export const createTicket = (ticket) => {
  return fetch(`http://localhost:8088/eventTickets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ticket),
  });
};
