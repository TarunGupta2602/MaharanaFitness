"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function About() {
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
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Image
            src="/about_hero.jpg"
            alt="About Maharana Fitness Club"
            width={1920}
            height={600}
            className="w-full h-[70vh] sm:h-[80vh] md:h-[90vh] object-cover opacity-70"
            priority
          />
          {/* Professional overlay */}
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
            About
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Maharana Fitness Club
            </span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-light text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Empowering you to live stronger, healthier, and happier through personalized fitness and community support.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-6 justify-center items-center" variants={itemVariants}>
            <motion.div variants={floatingVariants} animate="animate">
              <Link href="/membership">
                <motion.button
                  className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 sm:px-12 rounded-lg text-lg shadow-lg border border-blue-500/30"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Join Our Community
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-amber-500 to-red-600 text-transparent bg-clip-text font-['Oswald'] drop-shadow-md">
          Our Mission
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <Image
              src="/about.jpg"
              alt="Our Team"
              width={600}
              height={400}
              className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-base sm:text-lg text-gray-700 font-['Poppins']">
              At Maharana Fitness Club, we believe fitness is more than just a workout—it’s a lifestyle. Founded in 2020, our goal is to create a welcoming space where everyone, from beginners to athletes, can achieve their health goals. Our certified trainers craft personalized plans to help you build strength, boost confidence, and transform your life. We’re not just a gym; we’re a community dedicated to your success.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-amber-500 to-red-600 text-transparent bg-clip-text font-['Oswald'] drop-shadow-md">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-amber-500 to-red-600 text-transparent bg-clip-text font-['Oswald'] mb-2">
                Inclusivity
              </h3>
              <p className="text-gray-600 font-['Poppins']">
                A judgment-free zone where everyone feels welcome, regardless of fitness level.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-amber-500 to-red-600 text-transparent bg-clip-text font-['Oswald'] mb-2">
                Excellence
              </h3>
              <p className="text-gray-600 font-['Poppins']">
                Top-tier trainers and programs designed for real, lasting results.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-amber-500 to-red-600 text-transparent bg-clip-text font-['Oswald'] mb-2">
                Community
              </h3>
              <p className="text-gray-600 font-['Poppins']">
                Building connections through group classes and shared goals.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-amber-500 to-red-600 text-transparent bg-clip-text font-['Oswald'] mb-2">
                Innovation
              </h3>
              <p className="text-gray-600 font-['Poppins']">
                Cutting-edge equipment and training methods to keep you ahead.
              </p>
            </div>
          </div>
        </div>
      </div>

    

      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-12 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-100 to-gray-900 text-transparent bg-clip-text font-['Oswald']">
          Ready to Start Your Journey?
        </h2>
        <Link
          href="/membership"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 sm:px-8 rounded-lg transition-transform duration-300 hover:scale-105 hover:opacity-90"
        >
          Join Now
        </Link>
      </div>
    </div>
  );
}
