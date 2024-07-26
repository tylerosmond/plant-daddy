import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { CustomerList } from "./components/customers/CustomersList";
import { EmployeeList } from "./components/employees/EmployeesList";
import { PackageList } from "./components/packages/PackageList";
import { TicketList } from "./components/tickets/TicketList";
import { NavBar } from "./components/nav/NavBar";
import { Welcome } from "./components/welcome/Welcome";
import { About } from "./components/about/About";

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
        <Route index path="home" element={<Welcome />} />
        <Route path="catalog" element={<PackageList />} />
        <Route path="events" element={<TicketList />} />
        <Route path="aboutUs" element={<About />} />
        <Route path="employees" element={<EmployeeList />} />
      </Route>
      {/* <TicketList />
      <PackageList />
      <CustomerList />
      <EmployeeList /> */}
    </Routes>
  );
};
