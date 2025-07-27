
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Schedules() {
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
    hover: { scale: 1.05, transition: { duration: 0.3 } },
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

  // Dummy schedule data
  const schedule = [
    {
      day: 'Monday',
      classes: [
        { time: '7:00 AM', type: 'HIIT', instructor: 'Manessh Rana Maharana', image: '/2.jpg' },
        { time: '6:00 PM', type: 'Yoga', instructor: 'Manessh Rana Maharana', image: '/yoga.jpg' },
      ],
    },
    {
      day: 'Tuesday',
      classes: [
        { time: '8:00 AM', type: 'Personal Training', instructor: 'Manessh Rana Maharana', image: '/2.jpg' },
        { time: '7:00 PM', type: 'Cardio Kickboxing', instructor: 'Manessh Rana Maharana', image: '/2.jpg' },
      ],
    },
    {
      day: 'Wednesday',
      classes: [
        { time: '6:30 AM', type: 'Yoga', instructor: 'Manessh Rana Maharana', image: '/yoga.jpg' },
        { time: '5:30 PM', type: 'Strength Training', instructor: 'Manessh Rana Maharana', image: '/2.jpg' },
      ],
    },
    {
      day: 'Thursday',
      classes: [
        { time: '7:00 AM', type: 'Group Fitness', instructor: 'Manessh Rana Maharana', image: '/2.jpg' },
        { time: '6:00 PM', type: 'Nutrition Workshop', instructor: 'Manessh Rana Maharana', image: '/4.jpg' },
      ],
    },
    {
      day: 'Friday',
      classes: [
        { time: '8:00 AM', type: 'Personal Training', instructor: 'Manessh Rana Maharana', image: '/2.jpg' },
        { time: '7:00 PM', type: 'Zumba', instructor: 'Manessh Rana Maharana', image: '/2.jpg' },
      ],
    },
    {
      day: 'Saturday',
      classes: [
        { time: '9:00 AM', type: 'Yoga', instructor: 'Manessh Rana Maharana', image: '/yoga.jpg' },
        { time: '11:00 AM', type: 'HIIT', instructor: 'Manessh Rana Maharana', image: '/2.jpg' },
      ],
    },
    {
      day: 'Sunday',
      classes: [
        { time: '10:00 AM', type: 'Restorative Yoga', instructor: 'Manessh Rana Maharana', image: '/yoga.jpg' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
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
            alt="Schedule Hero"
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
            Class Schedules
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Weekly Timetable
            </span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-light text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Find the perfect class to fit your schedule and fitness goals.
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
                  Join a Class
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Schedule Section */}
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-amber-500 to-red-600 text-transparent bg-clip-text font-['Oswald'] drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Weekly Class Schedule
        </motion.h2>
        {/* Mobile: Card Layout */}
        <div className="block lg:hidden space-y-6">
          {schedule.map((day, index) => (
            <motion.div
              key={day.day}
              className="bg-white rounded-lg shadow-lg border border-gray-200 p-6"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-amber-500 to-red-600 text-transparent bg-clip-text font-['Oswald'] mb-4">
                {day.day}
              </h3>
              {day.classes.map((classItem, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-4 mb-4 last:mb-0"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <Image
                    src={classItem.image}
                    alt={classItem.type}
                    width={100}
                    height={100}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <p className="text-gray-900 font-['Poppins'] font-semibold">{classItem.time}</p>
                    <p className="text-gray-600 font-['Poppins']">{classItem.type}</p>
                    <p className="text-gray-500 font-['Poppins'] text-sm">Instructor: {classItem.instructor}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
        {/* Desktop: Table Layout */}
        <div className="hidden lg:block">
          <motion.table
            className="w-full bg-white rounded-lg shadow-lg border border-gray-200"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <thead>
              <tr className="bg-gray-50">
                {schedule.map((day, index) => (
                  <th
                    key={day.day}
                    className="py-4 px-6 text-lg font-bold text-gray-900 font-['Oswald'] border-b"
                  >
                    {day.day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {schedule.map((day, index) => (
                  <td key={day.day} className="py-4 px-6 border-b align-top">
                    <motion.div className="space-y-4" variants={containerVariants}>
                      {day.classes.map((classItem, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-4"
                          variants={cardVariants}
                          whileHover="hover"
                        >
                          <Image
                            src={classItem.image}
                            alt={classItem.type}
                            width={60}
                            height={60}
                            className="w-12 h-12 object-cover rounded-lg"
                          />
                          <div>
                            <p className="text-gray-900 font-['Poppins'] font-semibold">{classItem.time}</p>
                            <p className="text-gray-600 font-['Poppins']">{classItem.type}</p>
                            <p className="text-gray-500 font-['Poppins'] text-sm">Instructor: {classItem.instructor}</p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </td>
                ))}
              </tr>
            </tbody>
          </motion.table>
        </div>
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
            Contact Us for Scheduling
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
                Dhaulana, India
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
          </motion.div>
        </div>
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
          Ready to Join a Class?
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
