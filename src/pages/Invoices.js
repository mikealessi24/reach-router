import React from "react";
import { Link } from "@reach/router";

export default function Invoices({ children, navigate }) {
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
}
