import React from "react";
import { useForm } from "react-hook-form";
import { send } from "@emailjs/browser";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
  try {
    const response = await fetch("https://formspree.io/f/xpwjqkjn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        message: data.message,
      }),
    });

    if (response.ok) {
      alert("✅ Message sent! Check your Gmail inbox.");
      reset();
    } else {
      alert("❌ Failed to send message.");
    }
  } catch (error) {
    console.error(error);
    alert("❌ Something went wrong.");
  }
};

  return (
    <section
      id="contact"
      style={{
        width: "100%",
        minHeight: "100vh",
        padding: "50px 20px",
        backgroundColor: "#f4f0fa",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          fontSize: "36px",
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#6a0dad",
        }}
      >
        Contact Me
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          width: "100%",
          maxWidth: "500px",
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          {...register("name", { required: "Name is required" })}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
        {errors.name && (
          <span style={{ color: "red", fontSize: "14px" }}>
            {errors.name.message}
          </span>
        )}

        <input
          type="email"
          placeholder="Your Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: "Email is not valid",
            },
          })}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
        {errors.email && (
          <span style={{ color: "red", fontSize: "14px" }}>
            {errors.email.message}
          </span>
        )}

        <textarea
          placeholder="Your Message"
          rows="5"
          {...register("message", { required: "Message cannot be empty" })}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
        {errors.message && (
          <span style={{ color: "red", fontSize: "14px" }}>
            {errors.message.message}
          </span>
        )}

        <button
          type="submit"
          style={{
            backgroundColor: "#6a0dad",
            color: "#fff",
            padding: "12px",
            border: "none",
            borderRadius: "8px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#5a0bb5")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#6a0dad")}
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
