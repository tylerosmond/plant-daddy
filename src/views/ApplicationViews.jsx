import { Outlet, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/nav/NavBar";
import { Welcome } from "../components/welcome/Welcome";
import { PackageList } from "../components/packages/PackageList";
import { TicketList } from "../components/tickets/TicketList";
import { About } from "../components/about/About";
import { EmployeeList } from "../components/employees/EmployeesList";
import { Profile } from "../components/profile/Profile";
import { useEffect, useState } from "react";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localPlantDaddyUser = localStorage.getItem("plant_daddy_user");
    const plantDaddyUserObject = JSON.parse(localPlantDaddyUser);

    setCurrentUser(plantDaddyUserObject);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="catalog" element={<PackageList />} />
        <Route path="events" element={<TicketList />} />
        <Route path="aboutUs" element={<About />} />
        <Route path="employees" element={<EmployeeList />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      {/* <TicketList />
<PackageList />
<CustomerList />
<EmployeeList /> */}
    </Routes>
  );
};
