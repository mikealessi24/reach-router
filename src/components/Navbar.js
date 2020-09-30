import React from "react";
import { Link } from "@reach/router";

export default function Navbar({ signedIn, setSignedIn }) {
  return (
    <div>
      <Link to="/">Home</Link> <Link to="dashboard">Dashboard</Link>{" "}
      <Link to="invoices">Invoices</Link>
      <button onClick={() => setSignedIn(!signedIn)}>Sign in</button>
    </div>
  );
}
