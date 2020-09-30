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
        <NotFound default />
        <Home path="/" />
        <Dashboard path="/dashboard" />
        <Invoices path="invoices">
          <InvoicesIndex path="/"></InvoicesIndex>
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

const Invoices = ({ children, navigate }) => {
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
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const id = event.target.elements[0].value;
          event.target.reset();
          navigate(id);
        }}
      >
        <p>
          <label>
            New Invoice Id: <input type="text" name="invId" />
          </label>
          <button type="submit">Create a new invoice</button>
        </p>
      </form>
      {children}
    </div>
  );
};

const InvoicesIndex = () => {
  return (
    <div>
      This is the entry page once invoices is clicked. Type a number after the
      url to get a specific index
    </div>
  );
};

const NotFound = () => {
  return <div>oops, the page was not found. Check your url!</div>;
};

export default App;
