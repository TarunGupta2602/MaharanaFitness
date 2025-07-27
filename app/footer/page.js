"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2, 
        delayChildren: 0.1,
        duration: 0.6
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94]
      } 
    },
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-1 bg-amber-400 transform rotate-45"></div>
        <div className="absolute top-10 right-10 w-32 h-1 bg-amber-400 transform -rotate-45"></div>
        <div className="absolute bottom-10 left-1/4 w-24 h-1 bg-red-400 transform rotate-45"></div>
        <div className="absolute bottom-10 right-1/4 w-24 h-1 bg-red-400 transform -rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-lg">HC</span>
              </div>
              <div>
                <h3 className="text-xl font-black text-white">HEALTH CLUB</h3>
                <p className="text-sm text-gray-400 font-semibold">MAHARANA PRATAP FITNESS</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Transform your body and mind with our elite bodybuilding programs. 
              Expert guidance, proven results, and a community of champions.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/917017410007" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/maneeshrana523/" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.319 3.608 1.294.975.975 1.232 2.242 1.294 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.319 2.633-1.294 3.608-.975.975-2.242 1.232-3.608 1.294-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.319-3.608-1.294-.975-.975-1.232-2.242-1.294-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.319-2.633 1.294-3.608.975-.975 2.242-1.232 3.608-1.294 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.67.014-4.953.072-1.315.067-2.598.315-3.528.844-1.031.557-1.9 1.425-2.457 2.457-.529.93-.777 2.213-.844 3.528-.058 1.283-.072 1.694-.072 4.953s.014 3.67.072 4.953c.067 1.315.315 2.598.844 3.528.557 1.031 1.425 1.9 2.457 2.457.93.529 2.213.777 3.528.844 1.283.058 1.694.072 4.953.072s3.67-.014 4.953-.072c1.315-.067 2.598-.315 3.528-.844 1.031-.557 1.9-1.425 2.457-2.457-.93-.529-2.213-.777-3.528-.844-1.283-.058-1.694-.072-4.953s-.014-3.67-.072-4.953c-.067-1.315-.315-2.598-.844-3.528-.557-1.031-1.425-1.9-2.457-2.457-.93-.529-2.213-.777-3.528-.844-1.283-.058-1.694-.072-4.953-.072z"/>
                  <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/manish.rana.843019" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-black text-white mb-6 flex items-center gap-2">
              <div className="w-8 h-1 bg-gradient-to-r from-amber-500 to-red-600"></div>
              QUICK LINKS
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 font-medium">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 font-medium">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-black text-white mb-6 flex items-center gap-2">
              <div className="w-8 h-1 bg-gradient-to-r from-amber-500 to-red-600"></div>
              CONTACT INFO
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Dhaulana, Hapur, UP, India</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 font-medium">+91 7017410007</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 font-medium">contact@maharanafitness.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Business Hours */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-black text-white mb-6 flex items-center gap-2">
              <div className="w-8 h-1 bg-gradient-to-r from-amber-500 to-red-600"></div>
              BUSINESS HOURS
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300 font-medium">Monday - Friday</span>
                <span className="text-amber-400 font-bold">6 AM - 10 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 font-medium">Saturday - Sunday</span>
                <span className="text-amber-400 font-bold">8 AM - 8 PM</span>
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-amber-500/10 to-red-500/10 rounded-xl border border-amber-500/20">
                <p className="text-amber-400 font-semibold text-sm text-center">
                  Ready to start your transformation?
                </p>
                <p className="text-gray-400 text-xs text-center mt-1">
                  Contact us anytime via WhatsApp
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Maharana Pratap Fitness. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}