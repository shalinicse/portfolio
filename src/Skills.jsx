import React from "react";
import {
  FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaAngular
} from "react-icons/fa";
import {
  SiRedux, SiNextdotjs, SiTailwindcss, SiTypescript, SiJest, SiPostman
} from "react-icons/si";

const SKILLS = [
  { name: "React", Icon: FaReact },
  { name: "React Native", Icon: FaReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Redux Toolkit", Icon: SiRedux },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: FaJsSquare },
  { name: "HTML5", Icon: FaHtml5 },
  { name: "CSS3", Icon: FaCss3Alt },
  { name: "TailwindCSS", Icon: SiTailwindcss },
  { name: "Angular", Icon: FaAngular },
  { name: "Jest / RTL", Icon: SiJest },
  { name: "Postman", Icon: SiPostman },
];


export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        width: "100%",
        backgroundColor: "#f8f9fa",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2rem", color: "#6a0dad", marginBottom: "30px" }}>
        Skills
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {SKILLS.map(({ name, Icon }) => (
          <div
            key={name}
            style={{
              width: "120px",
              height: "120px",
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
            }}
          >
            <Icon style={{ fontSize: "2rem", color: "#6a0dad", marginBottom: "10px" }} />
            <span style={{ fontSize: "0.9rem", fontWeight: "500" }}>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
