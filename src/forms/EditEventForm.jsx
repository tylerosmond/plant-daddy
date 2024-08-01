import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEventTicket, updateTicket } from "../services/ticketService";
import { getAllPackages } from "../services/packageService"; // Adjust the path as needed
import "./Form.css";

export const EditEventForm = () => {
  const [event, setEvent] = useState({});
  const [plantPackages, setPlantPackages] = useState([]);
  const { ticketId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch event ticket data
    getEventTicket(ticketId).then((currentEvent) => {
      setEvent(currentEvent);
    });

    // Fetch all plant packages
    getAllPackages().then((packages) => {
      setPlantPackages(packages);
    });
  }, [ticketId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEvent({
      ...event,
      [name]: value,
    });
  };

  const handleSelectChange = (e) => {
    setEvent({
      ...event,
      packageId: parseInt(e.target.value), // Update the plantPackageId
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateTicket(event).then(() => {
      navigate(`/events`);
      // Handle post-save actions here (e.g., navigate back to the events page)
    });
  };

  return (
    <form>
      <h2 className="form-title">Edit Event</h2>
      <fieldset>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            name="description"
            className="form-control"
            value={event.description || ""}
            onChange={handleInputChange}
            placeholder="Enter Event Description"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Date</label>
          <input
            type="text"
            name="dateOfEvent"
            className="form-control"
            value={event.dateOfEvent || ""}
            onChange={handleInputChange}
            placeholder="mm/dd/yyyy"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Plant Package</label>
          <select
            className="form-control"
            value={event.packageId || ""}
            onChange={handleSelectChange}
          >
            <option value="" disabled>
              Select a Plant Package
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
          <button
            className="form-btn btn-info"
            type="submit"
            onClick={handleSave}
          >
            Save Event
          </button>
        </div>
      </fieldset>
    </form>
  );
};
