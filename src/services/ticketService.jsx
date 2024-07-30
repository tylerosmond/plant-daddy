export const getAllTickets = () => {
  return fetch(
    `http://localhost:8088/eventTickets?_embed=employeeTickets&_expand=package`
  ).then((res) => res.json());
};
