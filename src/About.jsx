import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, Typography, Box, Avatar } from "@mui/material";
import profilePic from "./assets/shalini.jpeg"

<Avatar src={profilePic} alt="Shalini Shukla" />

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        py: 10,
        px: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9fafb",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Card
          sx={{
            maxWidth: 800,
            mx: "auto",
            p: 4,
            borderRadius: 4,
            boxShadow: 6,
            textAlign: "center",
            background: "linear-gradient(135deg, #ffffff 70%, #eef2ff 100%)",
          }}
        >
          {/* Profile Image */}
          <Avatar
            src={profilePic}
            alt="Shalini Shukla"
            sx={{
              width: 140,
              height: 140,
              mx: "auto",
              mb: 3,
              border: "4px solid #6366f1",
              boxShadow: "0 8px 20px rgba(99,102,241,0.3)",
            }}
          />

          {/* Title */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 2,
              background: "linear-gradient(to right, #2563eb, #9333ea)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            About Me
          </Typography>

          {/* Description */}
          <CardContent>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                lineHeight: 1.8,
                fontSize: "1.05rem",
              }}
            >
              I am a passionate <b>Frontend Developer</b> with 4 years of
              experience building interactive dashboards, web, and mobile
              applications. Skilled in <b>React.js, Next.js, Redux</b> and
              creating smooth, optimized user experiences.  
              <br />
              <br />
              I love transforming complex problems into elegant solutions with
              clean, responsive UI and delightful interactions.
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
}
