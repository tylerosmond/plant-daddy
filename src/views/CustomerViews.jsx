import { Outlet, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/nav/NavBar";
import { Welcome } from "../components/welcome/Welcome";
import { PackageList } from "../components/packages/PackageList";
import { TicketList } from "../components/tickets/TicketList";
import { About } from "../components/about/About";
import { EmployeeList } from "../components/employees/EmployeesList";
import { Profile } from "../components/profile/Profile";
import { CustomerForm } from "../forms/CustomerForm";
import { EventForm } from "../forms/EventForm";
import { EditEventForm } from "../forms/EditEventForm";

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
        <Route path="events">
          <Route index element={<TicketList currentUser={currentUser} />} />
          <Route
            path="create"
            element={<EventForm currentUser={currentUser} />}
          />
          <Route
            path=":ticketId/edit"
            element={<EditEventForm currentUser={currentUser} />}
          />
        </Route>
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
