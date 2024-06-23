import React from "react";
import { Hero, Navbar, Skills } from "./Components";

function App() {
  return (
    <div className="w-full relative">
      <header className="sticky h-[55px] top-0 px-3 py-2 flex items-center  border-b border-slate-400/10">
        <Navbar />
      </header>

      <main>
        <Hero />
        <Skills/>
      </main>
    </div>
  );
}

export default App;
