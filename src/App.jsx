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
    src: { LAB },
  },
  {
    name: "Rent Read Buy",
    desc: "A web-based platform that enables users to search and order books seamlessly. Users can locate specific titles through an intuitive search interface, confirm delivery addresses, and complete transactions using multiple payment methods, including cash on delivery. Once an order is placed, books are delivered within 2–3 days, ensuring a smooth and reliable user experience.",
    src: { RRB },
  },
  {
    name: "CampusCredo",
    desc: "Digital education platform with Formik & React Charts for application management.",
    src: { CampusCredo },
  },
  {
    name: "CLEBER - Car Service Web App",
    desc: "Internationalized booking platform with vehicle management, scheduling & DMS integration.",
    src: { CarService },
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
      <section
        id="contact"
        className="bg-gradient-to-r from-purple-600 to-blue-600 py-20 px-6 text-white text-center"
      >
        <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
        <p className="mb-6">Interested in working together? Let’s connect.</p>
        <div className="flex justify-center gap-6">
          <a
            href="mailto:shalinishukla.bjs@gmail.com"
            className="hover:underline"
          >
            📧 Email
          </a>
          <a
            href="https://github.com/shalinicse"
            target="_blank"
            className="hover:underline"
          >
            💻 GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shalini-shukla-cs"
            target="_blank"
            className="hover:underline"
          >
            🔗 LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Shalini Shukla. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
