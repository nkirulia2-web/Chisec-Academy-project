import React from "react";

function About() {
  return (
    <div className=" w-full h-62 flex items-center justify-center">
      <div className="w-full  bg-linear-to-r from-blue-800 to-green-500 px-8 py-12 text-white text-center  shadow-xl">
        <h1 className="text-4xl font-bold mb-4">About Chisec Academy</h1>
        <p className="text-sm font-bold mb-6">Empowering your Tech Career</p>
        <p className="mx-auto max-w-3xl text-center text-base leading-8">
          At Chisec Academy, we are dedicated to providing high-quality online
          training to help you master tech skills that are needed to succeed in
          today&apos;s digital world.
        </p>
      </div>
    </div>
  );
}

export default About;
