export const getNonStaffUsers = () => {
  return fetch(`http://localhost:8088/users?isStaff=false`).then((res) =>
    res.json()
  );
};

export const getAllStaffUsers = () => {
  return fetch(`http://localhost:8088/users?isStaff=true`).then((res) =>
    res.json()
  );
};

export const getUserByEmail = (email) => {
  return fetch(`http://localhost:8088/users?email=${email}`).then((res) =>
    res.json()
  );
};

export const createUser = (customer) => {
  return fetch("http://localhost:8088/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  }).then((res) => res.json());
};

export const updateUser = (customer) => {
  return fetch(`http://localhost:8088/users/${customer.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  });
};
