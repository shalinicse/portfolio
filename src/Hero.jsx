import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { Box, Button, Typography, Stack } from "@mui/material";

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 3,
        background: "linear-gradient(135deg, #2563eb, #9333ea)",
        color: "white",
      }}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            mb: 2,
            background: "linear-gradient(to right, #facc15, #f472b6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Hi, I'm Shalini 👩‍💻
        </Typography>
      </motion.div>

      {/* Typing Effect */}
      <ReactTyped
        strings={[
          "Frontend Developer",
          "React & Next.js Enthusiast",
          "UI/UX Builder",
        ]}
        typeSpeed={60}
        backSpeed={40}
        loop
        className="text-2xl font-semibold mb-4"
      />

      {/* Subtitle */}
      <Typography variant="h6" sx={{ maxWidth: 600, mb: 4, opacity: 0.9 }}>
        I build modern, scalable, and user-friendly apps for web and mobile.
      </Typography>

      {/* Call-to-action buttons */}
      <Stack direction="row" spacing={3}>
        <Button
          href="#projects"
          variant="contained"
          sx={{
            px: 4,
            py: 1.5,
            fontWeight: 600,
            borderRadius: "12px",
            background: "white",
            color: "#2563eb",
            "&:hover": { background: "#f1f5f9" },
          }}
        >
          View Projects
        </Button>
        <Button
          href="#contact"
          variant="contained"
          sx={{
            px: 4,
            py: 1.5,
            fontWeight: 600,
            borderRadius: "12px",
            background: "linear-gradient(to right, #9333ea, #2563eb)",
            "&:hover": { opacity: 0.9 },
          }}
        >
          Contact Me
        </Button>
      </Stack>
    </Box>
  );
}
