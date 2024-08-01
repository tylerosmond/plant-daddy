export const getAllCustomers = () => {
  return fetch(`http://localhost:8088/customers?_expand=user`).then((res) =>
    res.json()
  );
};

export const updateCustomer = (customer) => {
  return fetch(`http://localhost:8088/customers/${customer.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  });
};
