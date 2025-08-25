import React from "react";

export const Hero = () => {
  return (
    <div className="my-40 w-full flex flex-col items-center justify-center font-display">
      <h1 className="text-7xl text-center leading-tight font-bold tracking-tight max-w-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500">
        Unleash the power of intuitive finance
      </h1>
      <p className="text-xl max-w-3xl mx-auto text-neutral-500 text-center mt-10 selection:bg-white">
        Say goodbye to the <span className="text-primary">outdated</span>{" "}
        financial tools. Every small business owner, regardless of the
        background, can now manage their{" "}
        <span className="text-primary">business</span> like a pro. Simple.
        Intuitive. And never boring.
      </p>

      <div className="mt-12 w-full max-w-lg flex justify-center">
        <input
          type="text"
          className="mr-4 flex-1 rounded-xl border border-neutral-600 px-4 text-white placeholder:text-neutral-500 focus:ring-1 focus:ring-sky-500 focus:outline-none transition duration-200"
          placeholder="Enter Your Email"
        />
        <button className=" relative rounded-xl border border-neutral-700 px-4 py-2 text-white cursor-pointer">
          Join Waitlist
          <div className="absolute -bottom-px inset-x-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent "></div>
        </button>
      </div>
    </div>
  );
};
