import React from "react";
import { Link, Router } from "@reach/router";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> <Link to="dashboard">Dashboard</Link>{" "}
        <Link to="invoices">Invoices</Link>
      </nav>
      <Router>
        <Home path="/" />
        <Dashboard path="/dashboard" />
        <Invoices path="invoices">
          <Invoice path=":invoiceId" />
        </Invoices>
      </Router>
    </div>
  );
}

const Home = () => (
  <div>
    <h2>Welcome Home</h2>
  </div>
);

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
  </div>
);

const Invoice = ({ invoiceId }) => {
  return (
    <div>
      <h2>Invoice {invoiceId}</h2>
    </div>
  );
};

const Invoices = ({ children }) => {
  return (
    <div>
      <h2>Invoices</h2>
      <ul>
        <li>
          <Link to="amazing">invoice amazing</Link>{" "}
        </li>
        <li>
          <Link to="wow">invoice wow</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default App;
