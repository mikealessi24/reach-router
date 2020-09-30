import React from "react";
import { Link } from "@reach/router";

export default function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link> <Link to="dashboard">Dashboard</Link>{" "}
      <Link to="invoices">Invoices</Link>
    </div>
  );
}
