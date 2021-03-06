import React from "react";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";

import { Router } from "@reach/router";

export default function PublicRoutes() {
  return (
    <div>
      <Router>
        <NotFound default />
        <Home path="/" />
        <Dashboard path="/dashboard" />
        {/* <Invoices path="invoices">
          <InvoicesIndex path="/"></InvoicesIndex>
          <Invoice path=":invoiceId" />
        </Invoices> */}
      </Router>
    </div>
  );
}
