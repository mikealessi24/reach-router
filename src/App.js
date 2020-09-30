import React from "react";
import { Router } from "@reach/router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Invoice from "./pages/Invoice";
import Invoices from "./pages/Invoices";
import InvoicesIndex from "./pages/InvoiceIndex";

function App() {
  return (
    <div>
      <Navbar />
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

export default App;
