
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Contact() {
  // Framer Motion variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const formFieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    focus: { scale: 1.02, transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    hover: { scale: 1.1, transition: { yoyo: Infinity, duration: 0.4 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/Hero.jpg"
            alt="Contact Hero"
            width={1920}
            height={600}
            className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] object-cover opacity-50"
            priority
          />
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-gray-100 to-red-900 text-transparent bg-clip-text font-['Montserrat'] drop-shadow-md mb-4"
            variants={itemVariants}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-['Poppins'] text-red-100 mb-6 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Have questions? Reach out to our team at Maharana Fitness Club!
          </motion.p>
        </motion.div>
      </div>

      {/* Contact Form and Info Section */}
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
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
            <form className="space-y-4">
              <motion.div variants={formFieldVariants}>
                <label className="block text-gray-700 font-['Poppins'] text-sm font-semibold mb-2" htmlFor="name">
                  Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  whileFocus="focus"
                />
              </motion.div>
              <motion.div variants={formFieldVariants}>
                <label className="block text-gray-700 font-['Poppins'] text-sm font-semibold mb-2" htmlFor="email">
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  whileFocus="focus"
                />
              </motion.div>
              <motion.div variants={formFieldVariants}>
                <label className="block text-gray-700 font-['Poppins'] text-sm font-semibold mb-2" htmlFor="message">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  whileFocus="focus"
                />
              </motion.div>
              <motion.div variants={formFieldVariants}>
                <motion.button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300"
                  variants={buttonVariants}
                  whileHover="hover"
                >
                  Send Message
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
                  123 Fitness Lane, Jaipur, Rajasthan 302001, India
                </p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-amber-500 to-red-600 text-transparent bg-clip-text font-['Oswald']">
                  Phone
                </h3>
                <p className="text-gray-600 font-['Poppins']">
                  +91 123-456-7890
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
                src="/group.jpg"
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