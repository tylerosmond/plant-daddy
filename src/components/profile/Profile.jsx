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
  }, []);

  if (!loggedInUser) {
    return <div>Loading...</div>;
  }

  // Only render the profile content if we're not in the edit mode
  const isEditMode = location.pathname.endsWith("/edit");

  return (
    <div className="profile">
      {isEditMode ? (
        <Outlet /> // Render only the nested route content (CustomerForm)
      ) : (
        <>
          <h2>{loggedInUser.user.fullName}&apos;s Profile</h2>
          <div className="profile-info">
            <div className="profile-column">
              <div>Name: {loggedInUser.user.fullName}</div>
              <div>Email: {loggedInUser.user.email}</div>
            </div>
            <div className="profile-column">
              <div>Phone: {loggedInUser.phoneNumber}</div>
              <div>Address: {loggedInUser.address}</div>
            </div>
          </div>
          <h4>
            <Link to={`/profile/${loggedInUser.user.id}/edit`}>Edit</Link>
          </h4>
        </>
      )}
    </div>
  );
};
