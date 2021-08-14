import * as React from "react";
import Navbar from "../components/Navbar.js";
import Hero from "../components/Hero.js";

// markup
const IndexPage = () => {
  return (
    <>
      <header className="fixed inset-x-0 z-10 bg-transparent">
        <Navbar />
      </header>
      <main className="relative z-5">
        <title>Bread | Home</title>

        <Hero />

        <div className="max-w-xl mx-auto py-36">
          <p className="p-6 text-3xl text-center">
            Let us help you sell more and grow faster with flexible pay over
            time solutions.
          </p>
        </div>
      </main>
    </>
  );
};

export default IndexPage;
