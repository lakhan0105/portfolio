import React from "react";
import Links from "./Links";

function Navbar() {
  return (
    <nav className="w-full  md:w-[600px] flex items-center justify-between px-4 py-2.5 md:mt-2 md:rounded-3xl m-auto bg-[#27272A] shadow-xl ">
      <h2 className="font-bold text-2xl">Lk</h2>
      <Links />
    </nav>
  );
}

export default Navbar;
