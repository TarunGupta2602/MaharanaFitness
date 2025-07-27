'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalType, setModalType] = useState('success'); // 'success' or 'error'

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2, duration: 0.8 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    tap: { scale: 0.95 },
  };

  const floatingVariants = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const formFieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    focus: { scale: 1.02, transition: { duration: 0.3 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      } 
    },
  };

  const showMessage = (message, type = 'success') => {
    setModalMessage(message);
    setModalType(type);
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const data = {
      data: {
        name,
        email,
        message,
      },
    };

    try {
      const response = await fetch('https://sheetdb.io/api/v1/cdya5zub1zf4h', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        showMessage('Message sent successfully! We will get back to you soon.', 'success');
        e.target.reset();
      } else {
        showMessage('Failed to send message. Please try again.', 'error');
      }
    } catch (error) {
      console.error('Error:', error); 
      showMessage('An error occurred. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Success/Error Modal */}
      {showModal && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowModal(false)}
        >
          <motion.div
            className={`relative bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl ${
              modalType === 'success' ? 'border-l-4 border-green-500' : 'border-l-4 border-red-500'
            }`}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                modalType === 'success' ? 'bg-green-100' : 'bg-red-100'
              }`}>
                {modalType === 'success' ? (
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
              <h3 className={`text-xl font-bold mb-2 ${
                modalType === 'success' ? 'text-green-800' : 'text-red-800'
              }`}>
                {modalType === 'success' ? 'Success!' : 'Error!'}
              </h3>
              <p className={`text-gray-600 mb-6 ${
                modalType === 'success' ? 'text-green-700' : 'text-red-700'
              }`}>
                {modalMessage}
              </p>
              <button
                onClick={() => setShowModal(false)}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  modalType === 'success' 
                    ? 'bg-green-500 hover:bg-green-600 text-white' 
                    : 'bg-red-500 hover:bg-red-600 text-white'
                }`}
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Image
            src="/Hero.jpg"
            alt="Contact Hero"
            width={1920}
            height={600}
            className="w-full h-[70vh] sm:h-[80vh] md:h-[90vh] object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 z-10 w-full max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-['Inter'] mb-6 leading-tight"
            variants={itemVariants}
          >
            Get in Touch
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Maharana Fitness Club
            </span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-light text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Have questions? Reach out to our team at Maharana Fitness Club!
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-6 justify-center items-center" variants={itemVariants}>
            <motion.div variants={floatingVariants} animate="animate">
              <Link href="#contact-form">
                <motion.button
                  className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 sm:px-12 rounded-lg text-lg shadow-lg border border-blue-500/30"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Contact Us
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Contact Form and Info Section */}
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8" id="contact-form">
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-amber-500 to-red-600 text-transparent bg-clip-text font-['Oswald'] drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Form */}
          <motion.div
            className="lg:w-1/2 bg-white p-6 rounded-lg shadow-lg"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <form className="space-y-4" onSubmit={handleSubmit}>
              <motion.div variants={formFieldVariants}>
                <label className="block text-gray-700 font-['Poppins'] text-sm font-semibold mb-2" htmlFor="name">
                  Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  whileFocus="focus"
                  required
                  disabled={isSubmitting}
                />
              </motion.div>
              <motion.div variants={formFieldVariants}>
                <label className="block text-gray-700 font-['Poppins'] text-sm font-semibold mb-2" htmlFor="email">
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  whileFocus="focus"
                  required
                  disabled={isSubmitting}
                />
              </motion.div>
              <motion.div variants={formFieldVariants}>
                <label className="block text-gray-700 font-['Poppins'] text-sm font-semibold mb-2" htmlFor="message">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  whileFocus="focus"
                  required
                  disabled={isSubmitting}
                />
              </motion.div>
              <motion.div variants={formFieldVariants}>
                <motion.button
                  type="submit"
                  className={`w-full font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                  variants={buttonVariants}
                  whileHover={!isSubmitting ? "hover" : {}}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info and Map */}
          <motion.div
            className="lg:w-1/2 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <motion.div variants={itemVariants}>
                <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-amber-500 to-red-600 text-transparent bg-clip-text font-['Oswald']">
                  Address
                </h3>
                <p className="text-gray-600 font-['Poppins']">
                  Dhulana, Hapur, UP, India
                </p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-amber-500 to-red-600 text-transparent bg-clip-text font-['Oswald']">
                  Phone
                </h3>
                <p className="text-gray-600 font-['Poppins']">
                  +91 7017410007
                </p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-amber-500 to-red-600 text-transparent bg-clip-text font-['Oswald']">
                  Email
                </h3>
                <p className="text-gray-600 font-['Poppins']">
                  contact@maharanafitness.com
                </p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-amber-500 to-red-600 text-transparent bg-clip-text font-['Oswald']">
                  Hours
                </h3>
                <p className="text-gray-600 font-['Poppins']">
                  Mon-Fri: 6 AM - 10 PM<br />
                  Sat-Sun: 8 AM - 8 PM
                </p>
              </motion.div>
            </div>
            <motion.div
              className="mt-6"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Image
                src="/4.jpg"
                alt="Gym Location Map"
                width={600}
                height={400}
                className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* CTA Footer */}
      <div className="bg-blue-900 text-white py-12 text-center">
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-100 to-red-900 text-transparent bg-clip-text font-['Oswald'] drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Start Your Fitness Journey?
        </motion.h2>
        <Link href="/membership" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 sm:px-8 rounded-lg">
          <motion.span
            variants={buttonVariants}
            whileHover="hover"
            animate={{ boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
            transition={{ duration: 0.4, yoyo: Infinity }}
          >
            Join Now
          </motion.span>
        </Link>
      </div>
    </div>
  );
}
