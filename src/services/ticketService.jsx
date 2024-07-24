export const getAllTickets = () => {
  return fetch(`http://localhost:8088/eventTickets`).then((res) => res.json());
};
