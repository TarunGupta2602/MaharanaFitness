
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Membership() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1, duration: 0.6 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' } 
    },
    hover: { 
      scale: 1.02, 
      transition: { duration: 0.3 } 
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  // Function to handle WhatsApp redirect
  const handleWhatsAppRedirect = (planType, duration) => {
    const message = `Hi! I'm interested in the ${duration} ${planType} program. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/917017410007?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
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
            src="/logo.webp"
            alt="Membership Hero"
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
            Join
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Maharana Fitness Club
            </span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-light text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Choose a membership plan and start your fitness journey today!
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-6 justify-center items-center" variants={itemVariants}>
            <motion.div>
              <Link href="#plans">
                <motion.button
                  className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 sm:px-12 rounded-lg text-lg shadow-lg border border-blue-500/30"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  View Plans
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Plans Section - Matching the Image Design */}
      <div id="plans" className="bg-[#e0f2f1] relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-1 bg-teal-300 transform rotate-45"></div>
          <div className="absolute top-20 right-10 w-32 h-1 bg-teal-300 transform -rotate-45"></div>
          <div className="absolute top-40 left-1/4 w-24 h-1 bg-teal-200 transform rotate-45"></div>
          <div className="absolute top-40 right-1/4 w-24 h-1 bg-teal-200 transform -rotate-45"></div>
          <div className="absolute bottom-40 left-20 w-20 h-1 bg-teal-200 transform rotate-45"></div>
          <div className="absolute bottom-40 right-20 w-20 h-1 bg-teal-200 transform -rotate-45"></div>
        </div>

        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Plans Heading */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-800 font-['Inter'] relative inline-block"
              variants={itemVariants}
            >
              Plans
              {/* Yellow diagonal lines */}
              <div className="absolute -top-2 -left-2 w-16 h-1 bg-yellow-400 transform rotate-45"></div>
              <div className="absolute -bottom-2 -right-2 w-16 h-1 bg-yellow-400 transform -rotate-45"></div>
            </motion.h2>
          </motion.div>

          {/* Services List */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-3 text-gray-800 font-medium text-lg max-w-2xl mx-auto">
              <p>A personalised strength training and cardio program</p>
              <p>A personalised diet plan</p>
              <p>A personalised supplementation list</p>
              <p>Fortnightly Check-ins</p>
              <p>Complete 24/7 access to me via email</p>
            </div>
          </motion.div>

          {/* Program Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                duration: "4 WEEK",
                type: "UPFRONT",
                image: "/6.png",
                nutritionOnly: "Customized Nutrition Plan only",
                fullPlan: "Customized Nutrition + Workout Plan"
              },
              {
                duration: "12 WEEK", 
                type: "UPFRONT",
                image: "/7.png",
                nutritionOnly: "Customized Nutrition Plan only",
                fullPlan: "Customized Nutrition + Workout Plan"
              },
              {
                duration: "24 WEEK",
                type: "UPFRONT", 
                image: "/4.png",
                nutritionOnly: "Customized Nutrition Plan only",
                fullPlan: "Customized Nutrition + Workout Plan"
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-r-4 border-blue-300"
                variants={cardVariants}
                whileHover="hover"
              >
                {/* Program Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={`${program.duration} Program`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Program Content */}
                <div className="p-6 space-y-6">
                  {/* Program Title */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">
                      {program.duration}
                    </h3>
                    <p className="text-xl font-bold text-gray-800 uppercase tracking-wide">
                      {program.type}
                    </p>
                  </div>

                  {/* Nutrition Only Option */}
                  <div className="space-y-3">
                    <p className="text-gray-700 font-medium text-center text-sm">
                      {program.nutritionOnly}
                    </p>
                    <motion.button 
                      className="w-full bg-blue-400 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                      onClick={() => handleWhatsAppRedirect("Nutrition Plan", program.duration)}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      Book Now
                    </motion.button>
                  </div>

                  {/* Full Plan Option */}
                  <div className="space-y-3">
                    <p className="text-gray-700 font-medium text-center text-sm">
                      {program.fullPlan}
                    </p>
                    <motion.button 
                      className="w-full bg-blue-400 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                      onClick={() => handleWhatsAppRedirect("Full Plan", program.duration)}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      Book Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-gray-800 font-medium text-lg">
              Complete 24/7 access to me via email
            </p>
          </motion.div>
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
                Dhaulana, Hapur, UP, India
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-amber-500 to-red-600 text-transparent bg-clip-text font-['Oswald']">
                Phone
              </h3>
              <p className="text-gray-600 font-['Poppins']">
                +91  7017410007
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
        <motion.button
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 sm:px-8 rounded-lg flex items-center gap-2 mx-auto"
          onClick={() => handleWhatsAppRedirect("Membership", "General")}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          Join Now
        </motion.button>
      </div>
    </div>
  );
}
