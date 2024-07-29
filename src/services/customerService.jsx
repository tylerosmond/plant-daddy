export const getAllCustomers = () => {
  return fetch(`http://localhost:8088/customers?_expand=user`).then((res) =>
    res.json()
  );
};
