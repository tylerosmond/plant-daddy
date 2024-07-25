export const getAllTickets = () => {
  return fetch(
    `http://localhost:8088/eventTickets?_embed=employeeTickets`
  ).then((res) => res.json());
};
