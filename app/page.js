"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

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

  // Function to handle WhatsApp redirect
  const handleWhatsAppRedirect = (planType, duration) => {
    const message = `Hi! I'm interested in the ${duration} ${planType} program. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/917017410007?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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
            src="/8.png"
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
              Maharana Pratap Fitness 
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
            <motion.div variants={floatingVariants} animate="animate" style={{ animationDelay: "1s" }}>
              <Link href="#plans">
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

      {/* Plans Section - Added from Membership Page */}
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
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                duration: "4 WEEK",
                type: "STARTER",
                image: "/6.png",
                nutritionOnly: "Nutrition Plan Only",
                fullPlan: "Complete Program",
                features: ["Personalized diet plan", "Basic workout guide", "Email support"]
              },
              {
                duration: "12 WEEK", 
                type: "INTERMEDIATE",
                image: "/gym2.jpg",
                nutritionOnly: "Nutrition Plan Only",
                fullPlan: "Complete Program",
                features: ["Custom meal plans", "Detailed workouts", "Weekly check-ins", "Priority support"],
                popular: true
              },
              {
                duration: "24 WEEK",
                type: "ADVANCED", 
                image: "/4.png",
                nutritionOnly: "Nutrition Plan Only",
                fullPlan: "Complete Program",
                features: ["Premium nutrition", "Advanced training", "Daily guidance", "24/7 support", "Progress tracking"]
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                className={`relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:scale-105 transition-all duration-500 ${
                  program.popular ? 'ring-2 ring-amber-500 ring-offset-4' : ''
                }`}
                variants={cardVariants}
                whileHover="hover"
              >
                {/* Popular Badge */}
                {program.popular && (
                  <div className="absolute top-6 right-6 z-10">
                    <span className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Program Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={`${program.duration} Program`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl font-black uppercase tracking-wider">
                      {program.duration}
                    </h3>
                    <p className="text-xl font-bold uppercase tracking-wider text-amber-400">
                      {program.type}
                    </p>
                  </div>
                </div>

                {/* Program Content */}
                <div className="p-8 space-y-6">
                  {/* Features List */}
                  <div className="space-y-3">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        <span className="text-gray-700 font-medium text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Nutrition Only Option */}
                  <div className="space-y-4">
                    <p className="text-gray-700 font-semibold text-center text-lg">
                      {program.nutritionOnly}
                    </p>
                    <motion.button 
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
                      onClick={() => handleWhatsAppRedirect("Nutrition Plan", program.duration)}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      BOOK NUTRITION PLAN
                    </motion.button>
                  </div>

                  {/* Full Plan Option */}
                  <div className="space-y-4">
                    <p className="text-gray-700 font-semibold text-center text-lg">
                      {program.fullPlan}
                    </p>
                    <motion.button 
                      className="w-full bg-gray-800 hover:bg-gray-600 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
                      onClick={() => handleWhatsAppRedirect("Full Plan", program.duration)}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      BOOK COMPLETE PROGRAM
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Trainer Section */}
      <div id="trainer" className="bg-gradient-to-br from-slate-800 via-blue-400 to-slate-900 text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-6xl sm:text-7xl lg:text-8xl font-black text-white font-['Inter'] relative inline-block tracking-tight"
              variants={floatingVariants}
              animate="animate"
            >
              ABOUT
              {/* Diagonal teal lines exactly like the image */}
              <div className="absolute -top-2 -left-4 w-20 h-1 bg-teal-400 transform rotate-45"></div>
              <div className="absolute -bottom-2 -right-4 w-20 h-1 bg-teal-400 transform -rotate-45"></div>
            </motion.h2>
          </motion.div>
          
          <motion.div
            className="flex flex-col lg:flex-row gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Left Section - Image */}
            <motion.div
              className="lg:w-1/2 order-1 lg:order-1"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="relative w-80 h-96 sm:w-96 sm:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/gym2.jpg"
                    alt="Manessh Rana Maharana"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Section - Text Content */}
            <motion.div className="lg:w-1/2 order-2 lg:order-2" variants={itemVariants}>
              <motion.h3 
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-['Inter'] mb-4 leading-tight"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                About Manessh Rana Maharana
              </motion.h3>
              
              <div className="text-lg font-semibold text-white-400 mb-8 italic">
                Certified Bodybuilding Coach & Gym Owner
              </div>
              
              <div className="space-y-6 text-gray-300 text-base leading-relaxed">
                <p>
                  Manessh Rana Maharana is a certified bodybuilding coach and the proud owner of Maharana Pratap Fitness, 
                  based in Dhaulana, Hapur, India. My one aim is to help you get into the kind of shape you have always 
                  dreamed of having. Whatever your fitness goals – Whether you're looking to lose weight, get stronger 
                  or build a lean and athletic physique, I will be able to find the right plan for your needs.
                </p>
                
                <p>
                  I realized that fitness was the one thing that kept me the most disciplined, driven, and dedicated. 
                  That was it. I had found my passion. I knew what I wanted to do for the rest of my life. I wanted to 
                  stay fit, and I wanted to show others how easy it was to do the same. With over 10 years of experience 
                  and numerous bodybuilding competition medals, I've transformed hundreds of lives and continue to inspire 
                  others on their fitness journey.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Transformations Section */}
      <div className="bg-[#e0f2f1] relative py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div className="inline-block mb-6" variants={itemVariants}>
              <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-red-600 mx-auto mb-6"></div>
              <span className="text-amber-600 font-semibold tracking-widest text-lg">REAL RESULTS</span>
            </motion.div>
            
            <motion.h2
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 font-['Inter'] mb-8 tracking-tight"
              variants={floatingVariants}
              animate="animate"
            >
              CLIENT
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-600">
                TRANSFORMATIONS
              </span>
            </motion.h2>
            
            <motion.p
              className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Witness the incredible transformations from our dedicated clients
            </motion.p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* Transformation Card 1 */}
            <motion.div 
              className="group relative"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/tranformation1.jpg"
                  alt="Client Transformation 1"
                  width={500}
                  height={600}
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-black mb-2">Before → After</h3>
                      <p className="text-amber-400 font-semibold">12 Week Program</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-black text-amber-400">-15kg</div>
                      <div className="text-sm text-gray-300">Weight Loss</div>
                    </div>
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    "Incredible transformation! The personalized program helped me achieve my dream physique. 
                    Manessh's guidance was invaluable throughout my journey."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Transformation Card 2 */}
            <motion.div 
              className="group relative"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/transformation2.jpg"
                  alt="Client Transformation 2"
                  width={500}
                  height={600}
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-black mb-2">Before → After</h3>
                      <p className="text-amber-400 font-semibold">24 Week Program</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-black text-amber-400">+12kg</div>
                      <div className="text-sm text-gray-300">Muscle Gain</div>
                    </div>
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    "The complete program transformed not just my body, but my entire lifestyle. 
                    Professional guidance and consistent results!"
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.button
              className="inline-block bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => handleWhatsAppRedirect("Transformation", "General")}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Start Your Transformation
            </motion.button>
          </motion.div>
        </div>
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
            <motion.button
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-12 rounded-lg text-xl shadow-lg border border-blue-500/30"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => handleWhatsAppRedirect("Membership", "General")}
            >
              Start Your Transformation Today
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function TrainerCarousel() {
  const images = ["/gym2.jpg", "/gym1.jpg"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative w-72 h-80 sm:w-96 sm:h-[28rem] mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white transition-all duration-700">
      <Image
        src={images[index]}
        alt="Manessh Rana Maharana"
        fill
        className="object-cover object-center transition-all duration-700"
        priority
      />
    </div>
  );
}