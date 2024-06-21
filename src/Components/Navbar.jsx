import React from "react";
import Links from "./Links";

function Navbar() {
  return (
    <nav className="sticky top-0 w-full flex justify-between items-center">
      <h2>Logo</h2>
      <Links />
    </nav>
  );
}

export default Navbar;
