"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  // Enhanced Framer Motion variants for better animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.3, 
        delayChildren: 0.2,
        duration: 0.8
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94]
      } 
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: { 
      scale: 1.05, 
      y: -10,
      boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      } 
    },
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05, 
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      } 
    },
    tap: { scale: 0.95 }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { 
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      } 
    },
  };

  const floatingVariants = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
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
            alt="Fitness Hero"
            width={1920}
            height={600}
            className="w-full h-[70vh] sm:h-[80vh] md:h-[90vh] object-cover opacity-70"
            priority
          />
          {/* Professional overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
        </motion.div>
        
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 z-10 w-full max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-['Inter'] mb-6 leading-tight"
            variants={itemVariants}
          >
            Transform Your Life at
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Maharana Fitness
            </span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-light text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Professional training programs designed to help you achieve your fitness goals with expert guidance and world-class facilities
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center" 
            variants={itemVariants}
          >
            <motion.div variants={floatingVariants} animate="animate">
              <Link href="/membership">
                <motion.button
                  className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 sm:px-12 rounded-lg text-lg shadow-lg border border-blue-500/30"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Start Your Journey
                </motion.button>
              </Link>
            </motion.div>
            <motion.div variants={floatingVariants} animate="animate" style={{ animationDelay: "1s" }}>
              <Link href="#services">
                <motion.button
                  className="inline-block bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-semibold py-4 px-8 sm:px-12 rounded-lg text-lg transition-all duration-300"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Explore Services
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Services Section */}
      <div id="services" className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-['Inter'] mb-4"
            variants={floatingVariants}
            animate="animate"
          >
            Our Premium Services
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.p
            className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Professional training programs tailored to your individual needs and goals
          </motion.p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
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
              color: 'from-blue-600 to-cyan-600'
            },
            {
              src: '/group.jpg',
              alt: 'Group Classes',
              title: 'Group Classes',
              desc: 'Fun and motivating group workouts for all fitness levels.',
              color: 'from-purple-600 to-pink-600'
            },
            {
              src: '/4.jpg',
              alt: 'Nutrition Plans',
              title: 'Nutrition Plans',
              desc: 'Customized diet plans to fuel your fitness journey.',
              color: 'from-green-600 to-emerald-600'
            },
            {
              src: '/yoga.jpg',
              alt: 'Yoga Classes',
              title: 'Yoga Classes',
              desc: 'Find balance and strength with our guided yoga sessions.',
              color: 'from-orange-600 to-red-600'
            },
          ].map((service, index) => (
            <motion.div
              key={service.title}
              className="group bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-gray-200"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={service.src}
                  alt={service.alt}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              </div>
              <div className="p-6">
                <motion.h3 
                  className={`text-xl font-bold mb-3 bg-gradient-to-r ${service.color} text-transparent bg-clip-text font-['Inter']`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.title}
                </motion.h3>
                <p className="text-gray-600 font-['Inter'] leading-relaxed text-sm">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Trainer Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-['Inter'] mb-4"
              variants={floatingVariants}
              animate="animate"
            >
              Meet Our Expert Trainer
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>
          
          <motion.div
            className="flex flex-col lg:flex-row gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="lg:w-1/2 order-2 lg:order-1" variants={itemVariants}>
              <motion.h3 
                className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text font-['Inter'] mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                Coach Anika
              </motion.h3>
              <p className="text-lg sm:text-xl text-gray-700 font-['Inter'] leading-relaxed mb-8">
                With over 10 years of experience, Coach Anika specializes in strength training, HIIT, and yoga. Her personalized approach ensures every member achieves their fitness goals in a supportive and motivating environment.
              </p>
              <motion.div
                className="flex gap-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600 font-['Inter']">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600">10+</div>
                  <div className="text-sm text-gray-600 font-['Inter']">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-600 font-['Inter']">Certifications</div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              className="lg:w-1/2 order-1 lg:order-2"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-10 blur-xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <Image
                  src="/4.jpg"
                  alt="Coach Anika"
                  width={500}
                  height={400}
                  className="relative w-full h-80 sm:h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-['Inter'] mb-4"
            variants={floatingVariants}
            animate="animate"
          >
            Success Stories
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
              quote: 'Maharana\'s trainers helped me lose 20 pounds and feel unstoppable!',
              color: 'from-blue-600 to-cyan-600'
            },
            {
              src: '/group.jpg',
              alt: 'Member Testimonial 2',
              name: 'Michael R.',
              quote: 'The group classes are a game-changer. I\'ve never been this fit!',
              color: 'from-purple-600 to-pink-600'
            },
            {
              src: '/4.jpg',
              alt: 'Member Testimonial 3',
              name: 'Priya S.',
              quote: 'The nutrition plans and yoga classes transformed my health.',
              color: 'from-green-600 to-emerald-600'
            },
          ].map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="group bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={testimonial.src}
                  alt={testimonial.alt}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${testimonial.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              </div>
              <div className="p-6">
                <motion.h3 
                  className={`text-xl font-bold mb-3 bg-gradient-to-r ${testimonial.color} text-transparent bg-clip-text font-['Inter']`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {testimonial.name}
                </motion.h3>
                <p className="text-gray-600 font-['Inter'] italic leading-relaxed text-sm">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Footer */}
      <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-blue-600/10" />
        <div className="relative z-10">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white font-['Inter']"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Transform Your Life?
          </motion.h2>
          <motion.p
            className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto font-['Inter']"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join thousands of members who have already achieved their fitness goals
          </motion.p>
          <motion.div variants={floatingVariants} animate="animate">
            <Link href="/membership">
              <motion.button
                className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-12 rounded-lg text-xl shadow-lg border border-blue-500/30"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Start Your Transformation Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}