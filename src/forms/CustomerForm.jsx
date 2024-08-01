import { useEffect, useState } from "react";
import { getAllCustomers, updateCustomer } from "../services/customerService";
import { updateUser } from "../services/userService"; // Assuming you have a separate service for user updates
import { useNavigate } from "react-router-dom";

export const CustomerForm = ({ currentUser }) => {
  const [customer, setCustomer] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getAllCustomers(currentUser.id).then((data) => {
      const customerObj = data[0];
      setCustomer(customerObj);
    });
  }, [currentUser]);

  const handleSave = (event) => {
    event.preventDefault();

    // Update address and phoneNumber
    const editedCustomer = {
      id: customer.id,
      address: customer.address,
      phoneNumber: customer.phoneNumber,
      userId: customer.userId,
    };

    // Update fullName and email
    const updatedUser = {
      id: customer.user.id,
      fullName: customer.user.fullName,
      email: customer.user.email,
    };

    // Call both update functions, then navigate back
    Promise.all([updateCustomer(editedCustomer), updateUser(updatedUser)]).then(
      () => {
        navigate(`/profile/${currentUser.id}`);
      }
    );
  };

  return (
    <form className="profile">
      <h2>Update Profile</h2>
      <fieldset>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={customer.user?.fullName || ""}
            onChange={(event) => {
              const copy = { ...customer };
              copy.user.fullName = event.target.value;
              setCustomer(copy);
            }}
            required
            className="form-control"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            value={customer.user?.email || ""}
            onChange={(event) => {
              const copy = { ...customer };
              copy.user.email = event.target.value;
              setCustomer(copy);
            }}
            required
            className="form-control"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="text"
            value={customer.phoneNumber || ""}
            onChange={(event) => {
              const copy = { ...customer };
              copy.phoneNumber = event.target.value;
              setCustomer(copy);
            }}
            required
            className="form-control"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            value={customer.address || ""}
            onChange={(event) => {
              const copy = { ...customer };
              copy.address = event.target.value;
              setCustomer(copy);
            }}
            required
            className="form-control"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button className="form-btn btn-primary" onClick={handleSave}>
            Save Profile
          </button>
        </div>
      </fieldset>
    </form>
  );
};
