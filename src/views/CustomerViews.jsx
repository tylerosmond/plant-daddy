import { Outlet, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/nav/NavBar";
import { Welcome } from "../components/welcome/Welcome";
import { PackageList } from "../components/packages/PackageList";
import { TicketList } from "../components/tickets/TicketList";
import { About } from "../components/about/About";
import { EmployeeList } from "../components/employees/EmployeesList";
import { Profile } from "../components/profile/Profile";
import { CustomerForm } from "../forms/CustomerForm";

export const CustomerViews = ({ currentUser }) => {
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
        <Route
          path="events"
          element={<TicketList currentUser={currentUser} />}
        />
        <Route path="aboutUs" element={<About />} />
        <Route path="employees" element={<EmployeeList />} />
        <Route
          path="profile/:userId"
          element={<Profile currentUser={currentUser} />}
        >
          <Route
            path="edit"
            element={<CustomerForm currentUser={currentUser} />}
          />
        </Route>
      </Route>
    </Routes>
  );
};
