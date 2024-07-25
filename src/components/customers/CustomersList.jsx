import { useEffect, useState } from "react";
import { getNonStaffUsers } from "../../services/userService";
import "./Customers.css";
import { CustomerUser } from "../users/User";

export const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getNonStaffUsers().then((customerArray) => {
      setCustomers(customerArray);
    });
  }, []);

  return (
    <div className="customers">
      <h2>Customers</h2>
      {customers.map((customerObj) => {
        return <CustomerUser userObj={customerObj} key={customerObj.id} />;
      })}
    </div>
  );
};
