import React from "react";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import sendSvg from "../images/send.svg";

const schema = yup.object().shape({
  name: yup.string().trim().required("Name field is required"),
  email: yup.string().email().required("Please enter a valid email address"),
  message: yup.string().trim().required("Please enter enter a message"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmitHandler = async (data) => {
    console.log(data);
    try {
      const response = await emailjs.sendForm(
        "service_8luawmu",
        "template_tdbeii7",
        "#contact-form",
        "eCJX0n4ScdUABumdq"
      );
      reset();
      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error("Message failed to send!");
    }
  };
  const toast1 = () => {
    toast.success("Message sent successfully!");
  };
  return (
    <section className="text-white lg:mt-[3rem] overflow-hidden" id="contact">
      <ToastContainer
        className="w-[70%] md:w-[20rem] w-17rem] h-[rem] text-sm mt-4 mx-auto translate-x-[1rem] md:translate-x-0 mr-3 md:mr-0"
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="relative md:ml-[13rem]">
        <hr className="absolute left-0 bottom-1/2 w-[32%] md:w-[38%] border-[#424242]" />
        <hr className="absolute right-0 bottom-1/2 w-[32%] md:w-[38%] border-[#424242]" />
        <h1
          onClick={toast1}
          className=" uppercase text-[1.5rem] font-[800] leading-[2.5rem] text-center tracking-[0.1em] relative lg:text-[3rem] lg:tracking-[0.11rem] lg:font-[500]"
        >
          CONTACT-ME
        </h1>
      </div>
      <h2 className=" font-[500] text-center text-[1rem] mx-4 scale-90 leading-[1.2rem] pt-1 md:text-[1.1rem] md:ml-[18rem] lg:mt-8 lg:text-[1.4rem] lg:leading-[1.7rem]  lg:font-[300]">
        Feel free to reach out to me via email or through the contact form below
        to discuss potential collaborations or opportunities.
      </h2>

      <form
        action=""
        id="contact-form"
        className="flex flex-col gap-4 py-6 md:translate-x-[7rem]"
        onSubmit={handleSubmit(formSubmitHandler)}
      >
        <div className="flex flex-col justify-center gap-3">
          <div className="mx-auto">
            <input
              type="text"
              placeholder="Name"
              name="name"
              {...register("name")}
              autoComplete="off"
              className="w-[22rem] md:w-[27.5rem] lg:w-[40rem] h-[2.5rem] border-[1px] outline-none border-[#747474] bg-black-gradient focus:border-white indent-3 rounded-[3px]"
            />
            <p className="text-[#ff0000] font-[500] text-sm text-left pt-1">
              {errors.name?.message}
            </p>
          </div>

          <div className="mx-auto">
            <input
              placeholder="Email"
              type="text"
              name="email"
              {...register("email")}
              autoComplete="off"
              className="w-[22rem] md:w-[27.5rem] lg:w-[40rem] h-[2.5rem] border-[1px] outline-none border-[#747474] bg-black-gradient focus:border-white indent-3 rounded-[3px]"
            />
            <p className="text-[#ff0000] font-[500] text-sm text-left pt-1">
              {errors.email?.message}
            </p>
          </div>
        </div>
        <div className="mx-auto">
          <textarea
            placeholder="Message"
            name="message"
            {...register("message")}
            cols="30"
            rows="10"
            className="w-[22rem] md:w-[27.5rem] lg:w-[40rem] h-[15rem] border-[1px] outline-none border-[#747474] bg-black-gradient focus:border-white p-3 rounded-[3px] resize-none"
          />
          <p className="text-[#ff0000] font-[500] text-sm text-center">
            {errors.message?.message}
          </p>
        </div>

        <motion.button
          className="flex border-2 rounded-[3px] cursor-pointer bg-white duration-150  justify-center w-[22rem] mx-auto"
          initial={{ scale: 0.8 }}
          whileHover={{ scale: 0.83 }}
          whileTap={{ scale: 0.65 }}
        >
          <img src={sendSvg} alt="" className="h-[1.9rem] my-auto ml-2" />
          <p className="p-3 font-semibold tracking-[0.25em] duration-150 text-black">
            SEND MESSAGE
          </p>
        </motion.button>
      </form>
    </section>
  );
};

export default Contact;
