import "./App.css";
import { CustomerList } from "./components/customers/CustomersList";
import { EmployeeList } from "./components/employees/EmployeesList";
import { PackageList } from "./components/packages/PackageList";
import { TicketList } from "./components/tickets/TicketList";

export const App = () => {
  return (
    <>
      <TicketList />
      <PackageList />
      <CustomerList />
      <EmployeeList />
    </>
  );
};
