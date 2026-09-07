import React from "react";
import Navbar from "./Navbar";
import Courses from "./Courses";
import { IoIosLock } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa";
import { PiDesktopTowerFill } from "react-icons/pi";
import { FaPython } from "react-icons/fa";
import About from "./About";
import Instructors from "./Instructors";
import image4 from "../assets/image4.jpeg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import Values from "./Values";
import { FaLightbulb } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";

const courses = [
  {
    icon: <IoIosLock className="text-teal-600" />,
    caption: "Cybersecurity",
    text: "Defend against cyber threats",
  },
  {
    icon: <FaLaptopCode className="text-blue-950" />,
    caption: "Fullstack Development",
    text: "Build modern web applications",
  },
  {
    icon: <PiDesktopTowerFill className="text-green-900" />,
    caption: "UI/UX Design",
    text: "Create intuitive user experience",
  },
  {
    icon: <FaPython className="text-shadow-blue-900" />,
    caption: "Python Backend",
    text: "Develop powerful server-side apps",
  },
];

const instructors = [
  {
    image: image4,
    name: "David Carter",
    bio: "Cybersecurity Specialist",
  },
  {
    image: image3,
    name: "Sarah Mitchell",
    bio: "Lead Fullstack Instructor",
  },
  {
    image: image2,
    name: "Jason Kim",
    bio: "UI/UX Design Expert",
  },
];

const values = [
  {
    icon: <FaLightbulb className="text-green-500 text-4xl" />,
    caption: "Innovation",
    text: "Cutting-edge curriculum",
  },
  {
    icon: <FaUsers className="text-blue-500 text-4xl" />,
    caption: "Community",
    text: "Supportive learning environment",
  },
  {
    icon: <FaRegStar className="text-yellow-500 text-4xl" />,
    caption: "Excellence",
    text: "Commitment to your success",
  },
];

function Home() {
  return (
    <>
      <div className="bg-linear-to-br from-blue-800 to-green-500 w-full h-100">
        <Navbar />
        <div className=" flex flex-col items-center mt-30 text-white">
          <h1 className="text-3xl font-bold pb-5">Learn Tech Skills Online </h1>
          <p className="pb-5 text-blue-950 font-bold">
            Cybersecurity . Fullstack . UI/UX .Python Backend
          </p>
          <button className="rounded-lg text-blue-950 py-2 px-3 bg-white">
            Explore Courses
          </button>
        </div>
      </div>
      <div>
        <p className="flex justify-center font-bold text-2xl text-blue-950 pt-4 ">
          Our Courses
        </p>
        <hr className=" border-black w-8 mx-auto mb-4 " />
        <div className="md:flex flex-wrap justify-center gap-10 pt-5">
          {courses.map((course, index) => (
            <Courses
              key={index}
              icon={course.icon}
              caption={course.caption}
              text={course.text}
            />
          ))}
        </div>
        <div>
          <About />
          <Instructors
            instructors={[
              {
                image: image4,
                name: "Chibunna Joe",
                bio: "Cybersecurity Specialist",
                about: "Chibunna helps students understand ethical hacking and how to protect digital systems.",
                experience: "8 years in cybersecurity",
                email: "chibunnaJoe@gmail.com",
              },
              {
                image: image3,
                name: "Sarah Mitchell",
                bio: "Lead Fullstack Instructor",
                about: "Sarah teaches students how to build reliable and accessible web applications.",
                experience: "6 years in fullstack development",
                email: "sarah@example.com",
              },
              {
                image: image2,
                name: "Jason Kim",
                bio: "UI/UX Design Expert",
                about: "Jason guides students through user research, interface design, and prototyping.",
                experience: "7 years in UI/UX design",
                email: "jason@example.com",
              },
            ]}
          />
          <Values values={values} />
          <footer className="text-center text-gray-500 py-6 bg-blue-950">
            @ 2026 Chisec Academy. All rights reserved.
          </footer>
        </div>
      </div>
    </>
  );
}

export default Home;
