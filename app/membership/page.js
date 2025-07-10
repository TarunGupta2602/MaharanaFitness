
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Membership() {
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
            src="/logo.webp"
            alt="Membership Hero"
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-900 text-transparent bg-clip-text font-['Montserrat'] drop-shadow-md mb-4"
            variants={itemVariants}
          >
            Join Maharana Fitness Club
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-['Poppins'] text-gray-100 mb-6 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Choose a membership plan and start your fitness journey today!
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              href="#plans"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 sm:px-8 rounded-lg transition-transform duration-300"
            >
              <motion.span variants={buttonVariants} whileHover="hover">
                View Plans
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Membership Plans Section */}
      <div id="plans" className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-amber-500 to-red-600 text-transparent bg-clip-text font-['Oswald'] drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Membership Plans
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
              title: 'Basic Plan',
              price: '₹2,000 / month',
              features: [
                'Access to gym facilities',
                'Group classes (2/week)',
                'Locker room access',
              ],
              image: '/2.jpg',
              alt: 'Basic Plan',
            },
            {
              title: 'Premium Plan',
              price: '₹4,000 / month',
              features: [
                'Unlimited gym access',
                'Unlimited group classes',
                '1 personal training session/month',
                'Nutrition consultation',
              ],
              image: '/2.jpg',
              alt: 'Premium Plan',
            },
            {
              title: 'Elite Plan',
              price: '₹6,000 / month',
              features: [
                'All Premium Plan benefits',
                'Weekly personal training sessions',
                'Customized nutrition plan',
                'Priority class booking',
              ],
              image: '/2.jpg',
              alt: 'Elite Plan',
            },
          ].map((plan, index) => (
            <motion.div
              key={plan.title}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl"
              variants={cardVariants}
              whileHover="hover"
            >
              <Image
                src={plan.image}
                alt={plan.alt}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-lg sm:text-xl font-bold mt-4 bg-gradient-to-r from-amber-500 to-red-600 text-transparent bg-clip-text font-['Oswald']">
                {plan.title}
              </h3>
              <p className="text-2xl font-semibold text-gray-900 font-['Poppins'] mt-2">{plan.price}</p>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-600 font-['Poppins'] flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className="inline-block w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-4 text-center transition-transform duration-300"
              >
                <motion.span variants={buttonVariants} whileHover="hover">
                  Choose Plan
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Contact Info Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-amber-500 to-red-600 text-transparent bg-clip-text font-['Oswald'] drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Contact Us for More Info
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
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
          </motion.div>
        </div>
      </div>

      {/* CTA Footer */}
      <div className="bg-blue-900 text-white py-12 text-center">
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-900 text-transparent bg-clip-text font-['Oswald'] drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Transform Your Life?
        </motion.h2>
        <Link href="/signup" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 sm:px-8 rounded-lg">
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
