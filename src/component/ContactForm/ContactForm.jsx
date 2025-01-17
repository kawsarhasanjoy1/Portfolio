import { useForm } from "@formspree/react";
import toast from "react-hot-toast";
import React, { useEffect, useRef } from "react";
import { useAnimation, motion, useInView } from "framer-motion";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xrgwllzg");
  if (state.succeeded) {
    toast.success("message send successful");
  }

  const ref = useRef(null);
  const inView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView]);

  const containerVariants = {
    hidden: { opacity: 0, x: -50, rotateY: 180, transition: { duration: 1 } },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: { duration: 2 },
    },
  };

  return (
    <motion.form
      variants={containerVariants}
      ref={ref}
      animate={controls}
      initial="hidden"
      onSubmit={handleSubmit}
    >
      <div className="shadow-2xl dark:bg-gray-800 dark:border-gray-700 mt-[50px] md:px-10 px-2 py-6 border rounded-lg space-y-[19px] text-black md:text-white">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-bold text-white">Name</span>
          </label>
          <input
            required
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="input input-bordered w-full border-[#00FFFF] rounded-sm "
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-bold text-white">Email</span>
          </label>
          <input
            required
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="input input-bordered w-full border-[#00FFFF] rounded-sm "
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-bold text-white">Subject</span>
          </label>
          <input
            required
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter subject"
            className="input input-bordered w-full border-[#00FFFF] rounded-sm "
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-bold text-white">Subject</span>
          </label>
          <input
            required
            type="text"
            id="message"
            name="message"
            placeholder="Enter message"
            className="input input-bordered w-full h-36 border-[#00FFFF] rounded-sm "
          />
        </div>
        <div className=" text-start">
          <button
            type="submit"
            disabled={state.submitting}
            className=" bg-[#00FFFF] text-black  uppercase px-8 py-2 rounded-sm hover:bg-white font-[ Radio Canada,sans-serif]"
          >
            SEND
          </button>
        </div>
      </div>
    </motion.form>
  );
};

export default ContactForm;
