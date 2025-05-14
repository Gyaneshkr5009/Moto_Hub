import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main Services Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">Our Services</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Service 1: Bike Reviews */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Comprehensive Bike Reviews</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                At Moto Hub, we provide detailed and unbiased reviews of the latest motorcycles. Our expert riders and reviewers test bikes extensively to give you the most accurate and up-to-date information, helping you make an informed decision before purchasing.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Whether you're looking for sport bikes, cruisers, or touring motorcycles, we cover all types of bikes and give insights into their performance, features, pros, and cons.
              </p>
            </div>

            {/* Service 2: Bike Comparisons */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Bike Comparison Tool</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Our interactive Bike Comparison Tool allows you to compare different motorcycle models side-by-side. You can evaluate various parameters such as engine performance, safety features, pricing, and design to make the best choice for your needs.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                The tool is simple to use and gives you a detailed comparison of key specifications, helping you select the perfect bike based on your preferences and requirements.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {/* Service 3: Community Forum */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Community Forum</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                The Moto Hub Community Forum is the heart of our platform. Here, riders from around the world can discuss all things motorcycle-related, from the latest news to bike maintenance tips and riding experiences.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Join our passionate community, ask questions, share your experiences, and connect with other motorcycle enthusiasts who share your interests.
              </p>
            </div>

            {/* Service 4: Motorcycle Accessories Marketplace */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Motorcycle Accessories Marketplace</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Moto Hub will soon launch its Motorcycle Accessories Marketplace, where riders can buy and sell bike accessories, parts, and gear. Our marketplace will feature trusted sellers, ensuring that you get high-quality products.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                From helmets and jackets to bike tools and performance parts, the Moto Hub Marketplace will be your go-to place for all your motorcycle needs.
              </p>
            </div>
          </div>

          {/* Service 5: Rider Education */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Rider Education & Resources</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                At Moto Hub, we offer comprehensive guides and tutorials to help riders improve their skills. From basic bike maintenance to advanced riding techniques, we provide valuable resources to make every rider safer and more knowledgeable.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Whether you're a beginner or an experienced rider, our educational content will help you get the most out of your riding experience.
              </p>
            </div>

            {/* Service 6: Motorcycle Events */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Motorcycle Events & Meetups</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Moto Hub also organizes and promotes motorcycle-related events, such as local meetups, rallies, and ride-outs. We strive to bring the community together by hosting both virtual and in-person events for all types of riders.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Stay connected with the latest events in the motorcycling world, and never miss an opportunity to meet fellow enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;
