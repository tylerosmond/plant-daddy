import { useEffect, useState } from "react";
import { getAllCustomers } from "../../services/customerService";
import "./Profile.css";

export const Profile = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getAllCustomers().then((customerArray) => {
      setCustomers(customerArray);
    });
  }, []);

  return (
    <div className="profile">
      <h2>User Profile</h2>
    </div>
  );
};
