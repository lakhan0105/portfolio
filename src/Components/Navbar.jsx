import React from "react";
import Links from "./Links";

function Navbar() {
  return (
    <nav className="w-full max-w-[1200px] mx-auto flex justify-between items-center">
      <h2 className="font-bold text-2xl">Lk</h2>
      <Links />
    </nav>
  );
}

export default Navbar;
