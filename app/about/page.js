
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white overflow-hidden">
        <Image
          src="/about_hero.jpg"
          alt="About Maharana Fitness Club"
          width={1920}
          height={600}
          className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] object-cover opacity-50"
          priority
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 animate-fadeIn">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-red-600 to-gray-900 text-transparent bg-clip-text font-['Montserrat'] drop-shadow-md mb-4">
            About Maharana Fitness Club
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-['Poppins'] text-gray-100 mb-6 max-w-2xl mx-auto">
            Empowering you to live stronger, healthier, and happier through personalized fitness and community support.
          </p>
          <Link
            href="/membership"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 sm:px-8 rounded-lg transition-transform duration-300 hover:scale-105 hover:opacity-90"
          >
            Join Our Community
          </Link>
        </div>
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
