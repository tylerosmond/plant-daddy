import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { CustomerList } from "./components/customers/CustomersList";
import { EmployeeList } from "./components/employees/EmployeesList";
import { PackageList } from "./components/packages/PackageList";
import { TicketList } from "./components/tickets/TicketList";
import { NavBar } from "./components/nav/NavBar";

export const App = () => {
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
        <Route path="home" element={<TicketList />} />
        <Route path="events" element={<TicketList />} />
        <Route path="catalog" element={<PackageList />} />
      </Route>
      {/* <TicketList />
      <PackageList />
      <CustomerList />
      <EmployeeList /> */}
    </Routes>
  );
};
