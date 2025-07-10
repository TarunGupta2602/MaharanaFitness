"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    hover: { scale: 1.05, rotate: 1, transition: { duration: 0.3 } },
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
            alt="Fitness Hero"
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-red-600 to-gray-900 text-transparent bg-clip-text font-['Montserrat'] drop-shadow-md mb-4"
            variants={itemVariants}
          >
            Welcome to Maharana Fitness Club
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-['Poppins'] text-red-100 mb-6 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Keep your body fit & strong with our world-class training programs.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
            <Link
              href="/membership"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 sm:px-8 rounded-lg transition-transform duration-300"
            >
              <motion.span variants={buttonVariants} whileHover="hover">
                Join Now
              </motion.span>
            </Link>
            <Link
              href="#services"
              className="inline-block bg-transparent border-2 border-blue-500 hover:border-blue-600 text-blue-500 hover:text-blue-600 font-bold py-2 px-6 sm:px-8 rounded-lg transition-transform duration-300"
            >
              <motion.span variants={buttonVariants} whileHover="hover">
                Explore Services
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Services Section */}
      <div id="services" className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-gray-100 to-gray-900 text-transparent bg-clip-text font-['Oswald'] drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              src: '/2.jpg',
              alt: 'Personal Training',
              title: 'Personal Training',
              desc: 'One-on-one sessions with certified trainers tailored to your goals.',
            },
            {
              src: '/group.jpg',
              alt: 'Group Classes',
              title: 'Group Classes',
              desc: 'Fun and motivating group workouts for all fitness levels.',
            },
            {
              src: '/4.jpg',
              alt: 'Nutrition Plans',
              title: 'Nutrition Plans',
              desc: 'Customized diet plans to fuel your fitness journey.',
            },
            {
              src: '/yoga.jpg',
              alt: 'Yoga Classes',
              title: 'Yoga Classes',
              desc: 'Find balance and strength with our guided yoga sessions.',
            },
          ].map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-lg"
              variants={cardVariants}
              whileHover="hover"
            >
              <Image
                src={service.src}
                alt={service.alt}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-lg sm:text-xl font-bold mt-4 bg-gradient-to-r from-amber-500 to-red-600 text-transparent bg-clip-text font-['Oswald']">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 font-['Poppins']">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Trainer Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-gray-100 to-gray-900 text-transparent bg-clip-text font-['Oswald'] drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Meet Our Trainer
          </motion.h2>
          <motion.div
            className="flex flex-col md:flex-row gap-8 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="md:w-1/2 order-2 md:order-1" variants={itemVariants}>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-amber-500 to-red-600 text-transparent bg-clip-text font-['Oswald'] mb-4">
                Coach Anika
              </h3>
              <p className="text-base sm:text-lg text-gray-600 font-['Poppins']">
                With over 10 years of experience, Coach Anika specializes in strength training, HIIT, and yoga. Her personalized approach ensures every member achieves their fitness goals in a supportive and motivating environment.
              </p>
            </motion.div>
            <motion.div
              className="md:w-1/2 order-1 md:order-2"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Image
                src="/4.jpg"
                alt="Coach Anika"
                width={400}
                height={300}
                className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-gray-100 to-gray-900 text-transparent bg-clip-text font-['Oswald'] drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Member Success Stories
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              src: '/4.jpg',
              alt: 'Member Testimonial 1',
              name: 'Sarah K.',
              quote: 'Maharana’s trainers helped me lose 20 pounds and feel unstoppable!',
            },
            {
              src: '/group.jpg',
              alt: 'Member Testimonial 2',
              name: 'Michael R.',
              quote: 'The group classes are a game-changer. I’ve never been this fit!',
            },
            {
              src: '/4.jpg',
              alt: 'Member Testimonial 3',
              name: 'Priya S.',
              quote: 'The nutrition plans and yoga classes transformed my health.',
            },
          ].map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg"
              variants={cardVariants}
              whileHover="hover"
            >
              <Image
                src={testimonial.src}
                alt={testimonial.alt}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-lg sm:text-xl font-bold mt-4 text-gray-900 font-['Oswald']">
                {testimonial.name}
              </h3>
              <p className="mt-2 text-gray-600 font-['Poppins'] italic">
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Footer */}
      <div className="bg-blue-900 text-white py-12 text-center">
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-red-900 text-transparent bg-clip-text font-['Oswald'] drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Transform Your Life?
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