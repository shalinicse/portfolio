import { motion } from "framer-motion";
import Navbar from "./Navbar";
import About from "./About";
import Hero from "./Hero";
import Skills from "./Skills";
import CampusCredo from "./assets/campus-credo.jpeg";
import CarService from "./assets/car-service.jpeg";
import RRB from "./assets/rrb.jpeg";
import LAB from "./assets/lab.jpeg";
import React from "react";
import Projects from "./Projects";
import Contact from "./Contact";

const skills = [
  "React.js",
  "Next.js",
  "Redux Toolkit",
  "TypeScript",
  "TailwindCSS",
  "Ant Design",
  "ApexCharts",
  "Formik",
  "React Native",
  "Jest / RTL",
  "Postman",
];

const projects = [
  {
    name: "Lab Portal",
    desc: "Interactive dashboards with React.js, ApexCharts & Redux Toolkit; optimized UI & API integrations.",
    src: LAB,
  },
  {
    name: "Rent Read Buy",
    desc: "A web-based platform that enables users to search and order books seamlessly. Users can locate specific titles through an intuitive search interface, confirm delivery addresses, and complete transactions using multiple payment methods, including cash on delivery.",
    src: RRB,

  },
  {
    name: "CampusCredo",
    desc: "Digital education platform with Formik & React Charts for application management.",
    src: CampusCredo,
  },
  {
    name: "CLEBER - Car Service Web App",
    desc: "Developed an online car service booking platform (for a Mexican client) with internationalization, enabling users to add vehicles, schedule/reschedule services, and integrate vehicle search with DMS for seamless service management.",
    src: CarService,
  },
];

function App() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      {/* Navbar */}
      <div>
        <Navbar />
        {/* rest of your sections */}
      </div>

      {/* Hero Section */}
      <div>
        <Hero />
      </div>

      {/* About Section */}
      <div>
        <About />
        {/* Skills, Projects, Contact */}
      </div>

      {/* Skills */}
      <div>
        <Skills />
      </div>

      {/* Projects */}
      <div>
        <Projects projects={projects} />
      </div>

      {/* Contact */}
      <div>
        <Contact />
      </div>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Shalini Shukla. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
