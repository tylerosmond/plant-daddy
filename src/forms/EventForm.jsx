import "./Form.css";

export const EventForm = () => {
  return (
    <form>
      <h2>New Event</h2>
      <fieldset>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Event Description"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Date</label>
          <input
            type="text"
            className="form-conterol"
            placeholder="mm/dd/yyyy"
          />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label>Plant Package</label>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button className="form-btn btn-info">Submit Event</button>
        </div>
      </fieldset>
    </form>
  );
};
