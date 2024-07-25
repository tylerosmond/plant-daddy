export const getAllPackages = () => {
  return fetch(`http://localhost:8088/packages`).then((res) => res.json());
};
