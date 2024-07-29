import "./Form.css";

export const CustomerForm = () => {
  return (
    <form className="profile">
      <h2>Update Profile</h2>
      <fieldset>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" required className="form-control" />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Email:</label>
          <input type="text" required className="form-control" />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Phone:</label>
          <input type="text" required className="form-control" />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Address:</label>
          <input type="text" required className="form-control" />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button className="form-btn btn-primary">Save Profile</button>
        </div>
      </fieldset>
    </form>
  );
};
