import React from "react";
import Links from "./Links";

function Navbar() {
  return (
    <nav className="w-full max-w-[1300px] mx-auto flex justify-between items-center">
      <h2>Logo</h2>
      <Links />
    </nav>
  );
}

export default Navbar;
