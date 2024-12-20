import React, { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import sendSvg from '../images/send.svg';

const schema = yup.object().shape({
  name: yup.string().trim().required('Name field is required'),
  email: yup.string().email().required('Please enter a valid email address'),
  message: yup.string().trim().required('Please enter enter a message'),
});

const Contact = () => {
  const [isSending, setIsSending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmitHandler = async (data) => {
    setIsSending(true);
    try {
      const response = await emailjs.sendForm(
        'service_8luawmu',
        'template_tdbeii7',
        '#contact-form',
        'eCJX0n4ScdUABumdq',
      );

      reset();
      setIsSending(false);
      toast.success('Message sent successfully!');
    } catch (error) {
      setIsSending(false);
      toast.error('Message failed to send!');
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="dark:text-white text-black lg:mt-[3rem] overflow-hidden"
      id="contact"
      data-aos="fade-up"
    >
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
        theme="colored"
      />
      <div className="relative md:ml-[13rem]">
        <hr className="absolute left-0 bottom-1/2 w-[32%] md:w-[38%] border-[#212121]" />
        <hr className="absolute right-0 bottom-1/2 w-[32%] md:w-[38%] border-[#212121]" />
        <h1 className="font-cereal-normal uppercase text-[1.5rem] leading-[2.5rem] text-center tracking-[0.1em] relative lg:text-[3rem] lg:tracking-[0.11rem] lg:font[500]">
          CONTACT-ME 📪
        </h1>
      </div>
      <h2 className="font-cereal-light font-[500] text-center text-[1rem] mx-4 scale-90 leading-[1.4rem] pt-1 md:text-[1.1rem] md:ml-[18rem] lg:mt-8 lg:text-[1.4rem] lg:leading-[1.9rem] lg:font-[300]">
        Feel free to reach out to me via email or through the contact form below{' '}
        <br className="hidden lg:block" />
        to discuss potential collaborations or opportunities.
      </h2>

      <form
        action=""
        id="contact-form"
        className="flex flex-col gap-4 py-6 md:translate-x-[7rem] font-cereal-light"
        onSubmit={handleSubmit(formSubmitHandler)}
      >
        <div className="flex flex-col justify-center gap-3">
          <div className="mx-auto">
            <input
              type="text"
              placeholder="Name"
              name="name"
              {...register('name')}
              autoComplete="off"
              className="w-[22rem] md:w-[27.5rem] lg:w-[40rem] h-[2.5rem] border-[2px] outline-none dark:border-[#747474] border-black dark:bg-black-gradient bg-white-gradient focus:border-white indent-3 rounded-[3px]"
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
              {...register('email')}
              autoComplete="off"
              className="w-[22rem] md:w-[27.5rem] lg:w-[40rem] h-[2.5rem] border-[2px] outline-none dark:border-[#747474] border-black dark:bg-black-gradient bg-white-gradient focus:border-white indent-3 rounded-[3px]"
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
            {...register('message')}
            cols="30"
            rows="10"
            className="w-[22rem] md:w-[27.5rem] lg:w-[40rem] h-[15rem] border-[2px] outline-none dark:border-[#747474] border-black dark:bg-black-gradient bg-white-gradient focus:border-white p-3 rounded-[3px] resize-none"
          />
          <p className="text-[#ff0000] font-[500] text-sm text-center">
            {errors.message?.message}
          </p>
        </div>

        <motion.button
          disabled={isSending}
          className={`flex ${
            isSending ? 'border-0' : 'border-2'
          } rounded-[7px] cursor-pointer ${
            isSending ? 'bg-[#ffffff7d]' : 'dark:bg-white bg-black'
          } duration-150  justify-center w-[22rem] mx-auto`}
          initial={{ scale: 0.8 }}
          whileHover={{ scale: 0.83 }}
          whileTap={{ scale: 0.65 }}
        >
          <img
            src={sendSvg}
            alt=""
            className="h-[1.9rem] my-auto ml-2 filter invert dark:filter-none"
          />
          <p className="p-3 font-semibold tracking-[0.25em] duration-150 dark:text-black text-white font-cereal-medium">
            {isSending ? 'SENDING...' : 'SEND MESSAGE'}
          </p>
        </motion.button>
      </form>
    </section>
  );
};

export default Contact;
