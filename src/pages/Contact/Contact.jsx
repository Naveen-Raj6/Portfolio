import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Phone, MapPin, Mail } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("Please fill in all required fields correctly.");
      return;
    }

    // Create a new FormData object to send to Web3Forms API
    const form = new FormData();
    form.append("access_key", "9e05c3ca-fb0d-47df-8533-b2eab414c8d4"); // Replace with your Web3Forms access key
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject || "New Contact Form Submission");
    form.append("message", formData.message);

    try {
      // Send form data to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        setStatus(result.message || "There was an error sending your message.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <motion.main
      className="pt-16 md:pt-20 lg:pt-[0rem] bg-[#04081A] text-white min-h-screen relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8 z-10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Get in Touch
                </h2>
                <p className="text-gray-300 text-lg">
                  Have a question or want to work together? Drop us a message!
                </p>
              </div>

              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="bg-purple-500/10 p-3 rounded-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Mail className="w-6 h-6 text-purple-400" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-400">naveenrajs1812@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="bg-pink-500/10 p-3 rounded-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MapPin className="w-6 h-6 text-pink-400" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-400">Banaglore, Karnataka 560068</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.div 
                  className="grid grid-cols-1 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  {[
                    { 
                      type: "text", 
                      placeholder: "Your Name", 
                      value: formData.name, 
                      onChange: (e) => setFormData({ ...formData, name: e.target.value }),
                      error: errors.name,
                      delay: 0.1
                    },
                    { 
                      type: "email", 
                      placeholder: "Your Email", 
                      value: formData.email, 
                      onChange: (e) => setFormData({ ...formData, email: e.target.value }),
                      error: errors.email,
                      delay: 0.2
                    },
                    { 
                      type: "text", 
                      placeholder: "Subject", 
                      value: formData.subject, 
                      onChange: (e) => setFormData({ ...formData, subject: e.target.value }),
                      error: errors.subject,
                      delay: 0.3
                    }
                  ].map((field, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + field.delay }}
                    >
                      <motion.input
                        type={field.type}
                        placeholder={field.placeholder}
                        className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                          field.error ? "border-red-500" : "border-gray-700"
                        } focus:border-blue-500 focus:outline-none transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:shadow-blue-500/20`}
                        value={field.value}
                        onChange={field.onChange}
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      />
                      {field.error && (
                        <motion.p 
                          className="text-red-500 text-sm mt-1"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {field.error}
                        </motion.p>
                      )}
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                  >
                    <motion.textarea
                      placeholder="Your Message"
                      rows="4"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        errors.message ? "border-red-500" : "border-gray-700"
                      } focus:border-blue-500 focus:outline-none transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:shadow-blue-500/20 resize-none`}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                    {errors.message && (
                      <motion.p 
                        className="text-red-500 text-sm mt-1"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </motion.div>
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <span>Send Message</span>
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Send className="w-4 h-4" />
                  </motion.div>
                </motion.button>
              </motion.form>

              {/* Status Message */}
              {status && (
                <motion.div
                  className={`mt-4 text-center ${
                    status.includes("success")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <p>{status}</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}