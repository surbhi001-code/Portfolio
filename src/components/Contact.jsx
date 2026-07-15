import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';
import { FaDribbble, FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa'
const Contact = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');
  const [isSending,setIsSending]=useState(false);
  const [status,setStatus]=useState(null);

  useEffect(() => {
    if (!status) return;

    const timer = setTimeout(() => setStatus(null), 4000);
    return () => clearTimeout(timer);
  }, [status]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all fields before sending.' });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }
    setIsSending(true);
    setStatus(null);
     //Emailjs serviceid templateid and [public key]
   const service_id='service_muxgxhn';
   const template_id='template_oac0cx1';
   const publicKey='kPFW8uipWvKZBfhRM';

 //Create a new object that contains dynamic template params
     const templateParams={
      from_name:name,
      from_email:email,
      to_name: "Surbhi Agarwal",
      to_email: "surbhiagarwal247@gmail.com",
      message:message,
     };
      
     //Send the eamil using Emailjs
     emailjs.send(service_id,template_id,templateParams,publicKey)
     .then((response)=>{
      console.log("Email sent successfully",response);
      setName('');
      setEmail('');
      setMessage('');
      setStatus({ type: 'success', message: 'Message sent successfully!' });
     })
     .catch((error)=>{
      console.log("Error sending email",error);
      setStatus({ type: 'error', message: 'Message could not be sent. Please try again.' });
     })
     .finally(()=>{
      setIsSending(false);
     });
  }
  
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.2 }}
    id="contact"
    className="py-20 bg-dark-200"
    >
    <div className='container mx-auto px-6'>
    <h2 className='text-3xl font-bold text-center mb-4'>Get In <span className='text-purple'>Touch</span></h2>
    <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16 '>Have a project in mind or want to collaborate? Let's talk!</p>
   <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
    {/* Contact Form */}
    <div>
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div>
                <label htmlFor='name' className='block text-gray-300 mb-2' >Your Name</label>
                <input 
                className='w-full bg-dark-300 border-dark-400 rounded-lg px-4 py-3 outline-none'
                type="text"
                required
                value={name}
                onChange={(e)=> setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='email' className='block text-gray-300 mb-2' >Email Address</label>
                <input 
                className='w-full bg-dark-300 border-dark-400 rounded-lg px-4 py-3 outline-none'
                type="email"
                required
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='message' className='block text-gray-300 mb-2' >Your Message</label>
                <textarea 
                className='w-full h-40 bg-dark-300 border-dark-400 rounded-lg px-4 py-3 outline-none'
                type="text"
                required
                value={message}
                onChange={(e)=> setMessage(e.target.value)}
                />
            </div>
            <button
              type="submit"
              disabled={isSending}
              className='w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2'
            >
              {isSending && <span className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></span>}
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    </div>
    {/* Contach Information */}
    <div className='space-y-8'>
        <div className='flex items-start'>
          <div className='text-purple text-2xl mr-4'>
           <FaMapMarkerAlt/>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-2'>Location</h3>
            <p className='text-gray-400'>Jaipur, Jagatpura</p>
          </div>
        </div>
         <div className='flex items-start'>
          <div className='text-purple text-2xl mr-4'>
           <FaEnvelope/>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-2'>Email</h3>
            <p className='text-gray-400'>surbhiagarwal247@gmail.com</p>
          </div>
        </div>
         <div className='flex items-start'>
          <div className='text-purple text-2xl mr-4'>
           <FaPhone/>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-2'>Phone</h3>
            <p className='text-gray-400'>+91-7568393938</p>
          </div>
        </div>
        <div className='pt-4'>
            <h3 className='text-lg font-semibold mb-4'>Follow me</h3>
            <div className='flex space-x-4'>
                <a href='https://github.com/surbhi001-code' className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300 '>
                    <FaGithub/>
                </a>
                 <a href='https://www.linkedin.com/in/surbhi-agarwal01/' className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue hover:bg-blue hover:text-white transition duration-300 '>
                    <FaLinkedin/>
                </a>
                 <a href='https://www.instagram.com/surbhibansaal/?hl=en' className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink-800 hover:bg-pink-700 hover:text-white transition duration-300 '>
                    <FaInstagram/>
                </a>
                 {/* <a href='#' className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink hover:bg-pink hover:text-white transition duration-300 '>
                    <FaDribbble/>
                </a> */}
            </div>
        </div>
    </div>
   </div>
    </div>
    {status && (
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        role="alert"
        className={`fixed top-6 right-6 z-50 max-w-sm rounded-lg border px-5 py-4 text-white shadow-2xl flex items-start gap-4 ${
          status.type === 'success'
            ? 'bg-green-600 border-green-400'
            : 'bg-red-600 border-red-400'
        }`}
      >
        <span className="font-medium">{status.message}</span>
        <button
          type="button"
          onClick={() => setStatus(null)}
          aria-label="Close notification"
          className="text-xl leading-none text-white/80 hover:text-white cursor-pointer"
        >
          &times;
        </button>
      </motion.div>
    )}
      
    </motion.div>
  )
}

export default Contact
