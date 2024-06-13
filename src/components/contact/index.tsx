"use client";
import React, {
  useRef,
  useState,
  ChangeEvent,
  FormEvent,
  RefObject,
} from "react";
import { Globe } from "./_components/globe";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { slideIn } from "@/lib/motion";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const formRef: RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_k09mf7h",
        "template_rsqva6b",
        {
          from_name: form.name,
          to_name: "Code & Crust",
          from_email: form.email,
          to_email: "info@codeandcrust.org",
          message: form.message,
        },
        "muguMNVV3hQ9t9BaF"
      )
      .then(
        () => {
          setLoading(false);
          setModalMessage(
            "Thank you. We will get back to you as soon as possible."
          );
          setModalVisible(true);
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setModalMessage("Ahh, something went wrong. Please try again.");
          setModalVisible(true);
        }
      );
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <section id="contact" className="py-8 relative">
      <div className="bg-white dark:bg-black w-full h-[4.5rem] mt-20 flex-col" />
      <div className="xl:mt-10 flex xl:flex-row flex-col gap-10 overflow-hidden items-center justify-center relative">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          initial="hidden"
          animate="show"
          className="flex-[0.75] bg-black-100 p-6 rounded-2xl max-w-lg w-full z-10"
        >
          <p className="sm:text-[14px] text-[16px] xs:text-[12px] text-primary uppercase tracking-wider text-center">
            Let's Create Your Ideas Together
          </p>
          <h3 className="text-foreground font-black md:text-[40px] sm:text-[30px] xs:text-[30px] text-[30px] text-center">
            Get A Quote
          </h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-6"
          >
            <label className="flex flex-col">
              <span className="text-foreground font-medium mb-2">
                Your Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-2 px-4 placeholder:text-primary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-foreground font-medium mb-2">
                Your Email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className="bg-tertiary py-2 px-4 placeholder:text-primary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-foreground font-medium mb-2">
                Your Message
              </span>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary py-2 px-4 placeholder:text-primary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <button
              type="submit"
              className="bg-primary py-2 px-6 rounded-xl outline-none text-white font-bold shadow-md shadow-primary hover:bg-tertiary"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
        <div className="flex-[0.75] max-w-[35rem] w-full lg:aspect-square aspect-auto lg:relative absolute lg:order-2 order-1">
          <Globe />
        </div>
      </div>
      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg text-center">
            <p>{modalMessage}</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-primary py-2 px-4 rounded text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
