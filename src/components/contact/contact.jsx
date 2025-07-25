import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = React.useRef();
  const [isSent, setIsSent] = useState(false);
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_25u7pvi',
        'template_v05qdef',
        form.current,
        'OCCkfSOwksoZNQlZv'
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success('Message sent successfully! ', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
        },
        (error) => {
          toast.error('Failed to send message:', error);
          toast.error('Failed to send message. Please try again later.', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
        }
      )
  }
  return (
    <section
      id="contact"
      className='flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]'
    >
       {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I'd love to hear from you-reach out for any queries

        </p>
      </div>
      {/* contact form */}
      <div className='mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700'>
        <h3 className='text-xl font-semibold text-white text-center'>Get in Touch</h3>
        <form ref={form} onSubmit={sendEmail} className='mt-4 flex flex-col space-y-4'>
          <input type="email" name="user_email" placeholder="Your Email" required
            className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500' />
          
                 <input type="text" name="user_name" placeholder="Your Name" required
            className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500' />
          
          
                 <input type="text" name="subject" placeholder="Subject" required
            className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500' />

                 <textarea name="message" placeholder="Message" rows="4"
            className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500' />
          {/* button */}
          <button type="submit" className='w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition duration-300'>
            Send Message
          </button>
        </form>
      </div>
      {/* Toast Container */}
      <ToastContainer />  
    </section>
  );
};

export default Contact;

  