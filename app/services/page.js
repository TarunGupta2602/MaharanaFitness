
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Services() {
  // Framer Motion variants for animations
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    hover: { scale: 1.05, rotate: 1, transition: { duration: 0.3 } },
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
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
            src="/Hero.jpg"
            alt="Services Hero"
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
            Our Services
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Fitness & Wellness
            </span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-light text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Discover our range of fitness programs designed to help you achieve your goals.
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
                  Join Now
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-amber-500 to-red-600 text-transparent bg-clip-text font-['Oswald'] drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Explore Our Fitness Offerings
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              src: '/logo.jpg',
              alt: 'Personal Training',
              title: 'Personal Training',
              desc: 'Work one-on-one with our certified trainer, Coach Anika, to create a customized fitness plan tailored to your unique goals. Whether you’re aiming to build strength, improve endurance, or enhance overall health, our personalized sessions provide the guidance and motivation you need to succeed.',
              benefits: [
                'Custom workout plans',
                'Dedicated trainer support',
                'Progress tracking',
              ],
            },
            {
              src: '/logo.jpg',
              alt: 'Group Classes',
              title: 'Group Classes',
              desc: 'Join our energetic group classes, from high-intensity interval training (HIIT) to cardio kickboxing. Designed for all fitness levels, these sessions foster a sense of community and keep you motivated with fun, dynamic workouts led by experienced instructors.',
              benefits: [
                'Variety of class types',
                'Motivating group atmosphere',
                'Flexible scheduling',
              ],
            },
            {
              src: '/logo.jpg',
              alt: 'Nutrition Plans',
              title: 'Nutrition Plans',
              desc: 'Fuel your body with personalized nutrition plans crafted by our experts. We’ll help you develop healthy eating habits that complement your fitness goals, whether you’re looking to lose weight, gain muscle, or boost energy levels.',
              benefits: [
                'Customized meal plans',
                'Nutritional guidance',
                'Ongoing support',
              ],
            },
            {
              src: '/yoga.jpg',
              alt: 'Yoga Classes',
              title: 'Yoga Classes',
              desc: 'Find balance and flexibility with our guided yoga classes. From beginner-friendly sessions to advanced flows, our classes focus on mindfulness, strength, and relaxation to enhance your physical and mental well-being.',
              benefits: [
                'Stress reduction',
                'Improved flexibility',
                'Mind-body connection',
              ],
            },
          ].map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl"
              variants={cardVariants}
              whileHover="hover"
            >
              <Image
                src={service.src}
                alt={service.alt}
                width={500}
                height={300}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mt-4 bg-gradient-to-r from-amber-500 to-red-600 text-transparent bg-clip-text font-['Oswald']">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 font-['Poppins']">{service.desc}</p>
              <ul className="mt-4 space-y-2">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="text-gray-600 font-['Poppins'] flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
              <Link
                href="/membership"
                className="inline-block w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-4 text-center transition-transform duration-300"
              >
                <motion.span variants={buttonVariants} whileHover="hover">
                  Learn More
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Footer */}
      <div className="bg-blue-900 text-white py-12 text-center">
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-red-600 to-gray-900 text-transparent bg-clip-text font-['Oswald'] drop-shadow-md"
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
