import React, { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "emailjs-com";
import Alert from "../SuccesFailure";

export const Contact = () => {
  const [alerts, setAlerts] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const SERVICE_ID = "service_58c7ukh";
  const TEMPLATE_ID = "template_2csjp3c";
  const PUBLIC_KEY = "fKR-ShASA_tb1Sm3P";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        setAlerts({ type: "success", message: "Message Sent" });
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setAlerts(null);
        }, 3000);
      })
      .catch(() => {
        setAlerts({
          type: "failure",
          message: "Oops! Something went wrong, please try again",
        });

        setTimeout(() => {
          setAlerts(null);
        }, 3000);
      });
  };

  return (
    <section
      id="contact"
      className=" min-h-screen flex items-center justify-center md:py-20 py-10"
    >
      <RevealOnScroll>
        <div className="px-4 md:w-150 w-80">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="realtive">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="realtive">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message...."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            {alerts && <Alert type={alerts.type} message={alerts.message} />}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
