import React from 'react';
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fadeIn } from '../../variants';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.target;
    const formData = new FormData(myForm);

    const formValues = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    const serviceID = 'service_qdkkjrl';
    const templateID = 'template_1vs0mnr';
    const userID = 'vpnmNiVDdkTU3CGRw';

    emailjs
      .send(serviceID, templateID, formValues, userID)
      .then(() => {
        toast.success('Thank you. I will get back to you ASAP.', {
          position: 'top-left',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          className: 'custom-toast-container', // Apply custom container style
          icon: <BsArrowRight className="custom-toast-icon" />, // Apply custom icon style
          progressClassName: 'custom-progress-bar', // Apply custom progress bar style
        });
        myForm.reset();
      })
      .catch((error) => {
        toast.error('Something went wrong. Please try again later.', {
          position: 'top-left',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          className: 'custom-toast-container', // Apply custom container style
          icon: <BsArrowRight className="custom-toast-icon" />, // Apply custom icon style
          progressClassName: 'custom-progress-bar', // Apply custom progress bar style
        });
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="h-full">
      <ToastContainer />
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>

          {/* form */}
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
            // only needed for production (in netlify) to accept form input
            data-netlify="true"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input glow-effect"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required="true"
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="input glow-effect"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required="true"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input glow-effect"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required="true"
            />
            <textarea
              name="message"
              placeholder="Message..."
              className="textarea glow-effect"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required="true"
            />
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              disabled={isLoading}
              aria-disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s talk
              </span>

              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                aria-hidden="true"
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
