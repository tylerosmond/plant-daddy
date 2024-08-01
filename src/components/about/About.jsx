import { Link } from "react-router-dom";
import "./About.css";

export const About = () => {
  return (
    <div className="about-container">
      <h1>
        <span>ABOUT US</span>
      </h1>
      <div className="about-container">
        <div>
          With over a decade of experience in the plant rental business, Plant
          Daddy is proud to offer an extensive selection of vibrant,
          high-quality plants for every occasion. Based in the Nashville metro
          area, we are dedicated to providing exceptional service and
          personalized solutions to meet your unique needs. Whether you're
          looking to brighten up an event, enhance your space, or explore a new
          green addition, our knowledgeable team is here to guide you every step
          of the way. Bring Life to your Live Event with Plant Daddy — where
          passion for plants meets unparalleled customer care.
        </div>
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
