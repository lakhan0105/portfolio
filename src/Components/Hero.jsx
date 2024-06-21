import React from "react";
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <section className="page-center flex justify-between pt-10">
      <div className="">
        <h2 className="text-3xl font-bold mb-2">I'm Lakhan,</h2>

        <ReactTyped
          strings={["I build responsive websites", "I'm a front-end developer"]}
          typeSpeed={40}
          className="text-4xl font-bold"
        />
        {/* <p className="text-xl mt-2">Bringing ideas to life through code</p> */}
      </div>
      <div>right</div>
    </section>
  );
}

export default Hero;
