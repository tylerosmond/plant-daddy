import { useEffect, useState } from "react";
import { EmployeeViews } from "./EmployeeViews";
import { CustomerViews } from "./CustomerViews";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localPlantDaddyUser = localStorage.getItem("plant_daddy_user");
    const plantDaddyUserObject = JSON.parse(localPlantDaddyUser);

    setCurrentUser(plantDaddyUserObject);
  }, []);

  return currentUser.isStaff ? (
    <EmployeeViews currentUser={currentUser} />
  ) : (
    <CustomerViews currentUser={currentUser} />
  );
};
