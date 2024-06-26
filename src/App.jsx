import React from "react";
import { Hero, Navbar, Projects, Skills } from "./Components";

function App() {
  return (
    <div className="w-full relative">
      <header className="z-10 bg-[#00152b] sticky h-[55px] top-0 px-3 py-2 flex items-center border-b border-slate-400/10">
        <Navbar />
      </header>

      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;
