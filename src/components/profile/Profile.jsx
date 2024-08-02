import { useEffect, useState } from "react";
import { getAllCustomers } from "../../services/customerService";
import "./Profile.css";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";

export const Profile = () => {
  const [customers, setCustomers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const { userId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getAllCustomers().then((customerArray) => {
      setCustomers(customerArray);

      const storedUser = localStorage.getItem("plant_daddy_user");

      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);

        // Ensure both IDs are compared as strings
        const currentUser = customerArray.find(
          (customer) => customer.user.id.toString() === parsedUser.id.toString()
        );

        setLoggedInUser(currentUser);
      }
    });
  }, [userId, location.pathname]);

  if (!loggedInUser) {
    return <div>Loading...</div>;
  }

  // Only render the profile content if we're not in the edit mode
  const isEditMode = location.pathname.endsWith("/edit");

  return (
    <div>
      {isEditMode ? (
        <Outlet /> // Render only the nested route content (CustomerForm)
      ) : (
        <div className="profile">
          <h1>{loggedInUser.user.fullName}&apos;s Profile</h1>
          <div className="profile-info">
            <div className="profile-column">
              <div>
                <h2>Name: {loggedInUser.user.fullName}</h2>
              </div>
              <div>
                <h2>Email: {loggedInUser.user.email}</h2>
              </div>
            </div>
            <div className="profile-column">
              <div>
                <h2>Phone: {loggedInUser.phoneNumber}</h2>
              </div>
              <div>
                <h2>Address: {loggedInUser.address}</h2>
              </div>
            </div>
          </div>
          <button className="btn-primary btn-container">
            <Link to={`/profile/${loggedInUser.user.id}/edit`}>Edit</Link>
          </button>
        </div>
      )}
    </div>
  );
};
