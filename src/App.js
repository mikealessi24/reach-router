import React from "react";
import { Link } from "@reach/router";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> <Link to="dashboard">Dashboard</Link>
      </nav>
    </div>
  );
}

export default App;
