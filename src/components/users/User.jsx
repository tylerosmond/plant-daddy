/* eslint-disable react/prop-types */
import "./User.css";

export const CustomerUser = ({ userObj }) => {
  return (
    <div className="user">
      <div>
        <div className="user-info">Name:</div>
        <div>{userObj.fullName}</div>
      </div>
      <div>
        <div className="user-info">Email:</div>
        <div>{userObj.email}</div>
      </div>
    </div>
  );
};

export const EmployeeUser = ({ userObj }) => {
  return (
    <div className="user" key={userObj.id}>
      <div>
        <div className="user-info">Name:</div>
        <div>{userObj.user.fullName}</div>
      </div>
      <div>
        <div className="user-info">Email:</div>
        <div>{userObj.user.email}</div>
      </div>
      <div>
        <div className="user-info">Availability:</div>
        <div>{userObj.availability ? "Ready to Grow!" : "Dormant"}</div>
      </div>
    </div>
  );
};
