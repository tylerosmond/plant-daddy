import { useEffect, useState } from "react";
import "./Form.css";
import { createTicket } from "../services/ticketService";
import { useNavigate } from "react-router-dom";
import { getAllPackages } from "../services/packageService";

export const EventForm = ({ currentUser }) => {
  const [newEvent, setNewEvent] = useState({
    description: "",
    dateOfEvent: "",
    packageId: "",
    active: true,
  });

  const [plantPackages, setPlantPackages] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getAllPackages().then((packages) => {
      setPlantPackages(packages);
    });
  }, []);

  const handleSave = (event) => {
    event.preventDefault();

    if (newEvent.description && newEvent.dateOfEvent && newEvent.packageId) {
      const newEventTicket = {
        userId: currentUser.id,
        description: newEvent.description,
        dateOfEvent: newEvent.dateOfEvent,
        packageId: newEvent.packageId,
        active: true,
      };

      createTicket(newEventTicket).then(() => {
        navigate("/events");
      });
    } else {
      window.alert(
        "Please Select a Plant Package and enter Date and Description"
      );
    }
  };

  return (
    <form>
      <h2 className="form-title">New Event</h2>
      <fieldset>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Event Description"
            onChange={(event) => {
              const newEventCopy = { ...newEvent };
              newEventCopy.description = event.target.value;
              setNewEvent(newEventCopy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Date</label>
          <input
            type="text"
            className="form-control"
            placeholder="mm/dd/yyyy"
            onChange={(event) => {
              const newEventCopy = { ...newEvent };
              newEventCopy.dateOfEvent = event.target.value;
              setNewEvent(newEventCopy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Plant Package</label>
          <select
            className="form-control"
            value={newEvent.packageId}
            onChange={(event) => {
              const newEventCopy = { ...newEvent };
              newEventCopy.packageId = parseInt(event.target.value);
              setNewEvent(newEventCopy);
            }}
          >
            <option value="" disabled>
              Select A Plant Package
            </option>
            {plantPackages.map((pkg) => (
              <option key={pkg.id} value={pkg.id}>
                {pkg.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button className="form-btn btn-info" onClick={handleSave}>
            Submit Event
          </button>
        </div>
      </fieldset>
    </form>
  );
};
