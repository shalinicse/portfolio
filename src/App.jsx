import { motion } from "framer-motion";

const skills = [
  "React.js", "Next.js", "Redux Toolkit", "TypeScript", "TailwindCSS",
  "Ant Design", "ApexCharts", "Formik", "React Native", "Jest / RTL", "Postman"
];

const projects = [
  {
    name: "Lab Portal",
    desc: "Interactive dashboards with React.js, ApexCharts & Redux Toolkit; optimized UI & API integrations."
  },
  {
    name: "Care Connectors",
    desc: "Mobile app with React Native & ECharts; improved care coordination efficiency."
  },
  {
    name: "CampusCredo",
    desc: "Digital education platform with Formik & React Charts for application management."
  },
  {
    name: "Car Service Booking",
    desc: "Internationalized booking platform with vehicle management, scheduling & DMS integration."
  }
];

function App() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">Shalini Shukla</h1>
          <div className="space-x-6">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold mb-4">
          Hi, I'm Shalini 👩‍💻
        </motion.h2>
        <p className="text-lg mb-6 max-w-2xl">
          A Frontend Developer specializing in React, Next.js & dashboards. I build scalable, high-performing apps for web & mobile.
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl shadow hover:bg-gray-200">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 bg-purple-800 text-white font-semibold rounded-xl shadow hover:bg-purple-900">
            Contact Me
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">About Me</h3>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
          I am a Frontend Developer with 4 years of experience in React.js, Next.js, Redux, and building interactive dashboards.
          Skilled in optimization, API integration, and delivering responsive, user-friendly interfaces for both web and mobile.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-md text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto py-20 px-6">
        <h3 className="text-3xl font-bold text-center mb-10">Projects</h3>
        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div key={project.name} whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
              <h4 className="font-semibold text-xl mb-2 text-blue-600">{project.name}</h4>
              <p className="text-gray-600 text-sm">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gradient-to-r from-purple-600 to-blue-600 py-20 px-6 text-white text-center">
        <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
        <p className="mb-6">Interested in working together? Let’s connect.</p>
        <div className="flex justify-center gap-6">
          <a href="mailto:shalinishukla.bjs@gmail.com" className="hover:underline">📧 Email</a>
          <a href="https://github.com/shalinicse" target="_blank" className="hover:underline">💻 GitHub</a>
          <a href="https://www.linkedin.com/in/shalini-shukla-cs" target="_blank" className="hover:underline">🔗 LinkedIn</a>
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
