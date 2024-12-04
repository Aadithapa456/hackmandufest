import React from "react";
import Buttons from "./Buttons";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative flex min-h-[70vh] items-center justify-center"
    >
      {/* Top Right Gradient Box */}
      <div className="absolute right-0 top-0 -z-10 h-48 w-48 -translate-y-1/4 translate-x-1/4 transform rounded-bl-[100px] bg-gradient-to-bl from-purple-500 to-pink-500 opacity-30"></div>

      {/* Bottom Left Gradient Box */}
      <div className="absolute bottom-0 left-0 -z-10 h-56 w-56 -translate-x-1/4 translate-y-1/4 transform rounded-tr-[100px] bg-gradient-to-tr from-blue-500 to-green-500 opacity-30"></div>

      <div className="hero-section mt-20 grid items-center md:grid-cols-[repeat(1,1fr_1fr)] md:px-10">
        <div className="hero-details text-center md:text-left">
          <h1 className="text-4xl font-bold">
            Transform your journey with HACKMANDUFEST'S HACKATHON
          </h1>
          <p className="my-5 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            molestias eius. Earum quasi distinctio quisquam ab atque reiciendis
            obcaecati ex dolorum nam veniam!
          </p>
          <div className="hero-buttons">
            <Buttons
              onclick={() => {
                console.log("Hello World!");
              }}
            >
              Learn More
            </Buttons>
            <Buttons
              onclick={() => {
                console.log("Hello World!");
              }}
            >
              Register Now
            </Buttons>
          </div>
        </div>
        <div className="hero-image self-center justify-self-center">
          <img
            className="mt-10 w-9/12 justify-self-center rounded-3xl md:mt-0 lg:w-6/12"
            src="https://plus.unsplash.com/premium_photo-1681400688788-a5fd7e7bcd89?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="IMG"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
