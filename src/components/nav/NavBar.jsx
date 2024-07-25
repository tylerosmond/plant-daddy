import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link to="/Home">Home</Link>
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
        <Link to="/profile">Profile</Link>
      </li>
    </ul>
  );
};
