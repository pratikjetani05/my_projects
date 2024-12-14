import React from "react";
import { Button } from "../button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      <h1 className="font-extrabold text-[50px] text-center mt-16">
        <span className="text-orange-600">
          Discover Your Next Adventure with AI:
        </span>
        <br /> Personalized ltineraries at Your Fingertrips
      </h1>

      <p className="text-xl text-gray-500 text-center">
        Your Personal trip planner and travel curator ,creatimg custom
        itineraries tailored toyour interests and budget.
      </p>
      <Link to={'/create-trip'}>
        <Button>Get Started, It's Free</Button>
      </Link>

      <img src="/landing.jpg" alt="landing page" className="-mt-20 mb-20 border shadow-md rounded-md " />
    </div>
  );
}

export default Hero;
