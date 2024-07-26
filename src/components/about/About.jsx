import { Link } from "react-router-dom";
import "./About.css";

export const About = () => {
  return (
    <div className="about-container">
      <h1>
        <span>ABOUT US</span>
      </h1>
      <div className="about-container">
        <div>Description of Company</div>
      </div>
      <button className="employee-link btn-info">
        <Link to="/employees">Employees</Link>
      </button>
      <h2 className="contact-title">Contact Us</h2>
      <div>
        <div>Phone: (778) 330-2389</div>
        <div>Email: contact@PlantDaddy.com</div>
      </div>
    </div>
  );
};
