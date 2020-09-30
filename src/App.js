import React from "react";
import { Link, Router } from "@reach/router";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> <Link to="dashboard">Dashboard</Link>
      </nav>
      <Router>
        <Home path="/" />
        <Dashboard path="/dashboard" />
        <Invoice path="invoices/:invoiceId" />
      </Router>
      <Link to="invoices/amazing">invoice amazing</Link>{" "}
      <Link to="invoices/wow">invoice wow</Link>
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

export default App;
