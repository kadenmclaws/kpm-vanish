import * as React from "react";
import { Link } from "gatsby";

const Hero = () => {
  return (
    <div className="pt-36 hero">
      <div className="z-20 px-16 lg:py-32 lg:px-32">
        <h1 className="text-3xl font-extrabold lg:text-8xl text-">
          Transforming retail. <br /> Unlocking growth.
        </h1>
        <p className="pt-12 pl-2 lg:text-xl md:w-1/2 lg:w-1/3 lg:max-w-lg">
          Bread helps retailers leverage pay over time solutions as a way to
          build stronger consumer connections, power sales, and improve brand
          loyalty.
        </p>
        <Link
          to="#"
          className="inline-block px-8 py-4 my-10 ml-6 text-white transition-all duration-150 bg-green hero-btn hover:bg-indigo"
        >
          GET A DEMO
        </Link>
      </div>
    </div>
  );
};

export default Hero;
