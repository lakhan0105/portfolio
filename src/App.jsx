import React from "react";
import { Hero, Navbar, Projects, Skills } from "./Components";

function App() {
  return (
    <div className="w-full relative">
      <header className="z-10 bg-none fixed top-0 right-0 left-0">
        <Navbar />
      </header>

      <main>
        <Hero />
        {/* <Skills /> */}
        <Projects />
      </main>
    </div>
  );
}

export default App;
