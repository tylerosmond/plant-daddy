import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("plant_daddy_user"));

  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link to="/">Home</Link>
      </li>
      <li className="navbar-item">
        <Link to="/catalog">Catalog</Link>
      </li>
      <li className="navbar-item">
        <Link to="/events">Events</Link>
      </li>
      <li className="navbar-item">
        <Link to="/aboutUs">About Us</Link>
      </li>
      <li className="navbar-item">
        <Link to={`/profile/${currentUser.id}`}>Profile</Link>
      </li>
      {localStorage.getItem("plant_daddy_user") ? (
        <li className="navbar-item navbar-logout">
          <Link
            className="navbar-link"
            to=""
            onClick={() => {
              localStorage.removeItem("plant_daddy_user");
              navigate("/", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};
