import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main About Section */}
      <section className="py-20 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">About Moto Hub</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                At Moto Hub, we are passionate about bringing motor enthusiasts the latest and greatest content
                in the world of motorcycles. Whether it’s reviews, discussions, or news, our goal is to foster a
                community where riders share their experiences, knowledge, and love for bikes.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                What started as a small group of motorcycle enthusiasts has now blossomed into a global
                community. From humble beginnings, Moto Hub has grown into a trusted source for information,
                inspiration, and camaraderie among riders worldwide. We continue to strive to be the go-to
                destination for bike lovers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Call to Action */}
      <Footer>
        <section className="bg-gray-800 text-white py-16">
          <div className="max-w-7xl mx-auto text-center px-6">
            <h2 className="text-3xl font-extrabold mb-6">Join the Moto Hub Community</h2>
            <p className="text-lg mb-8">
              Connect with fellow enthusiasts, share your stories, and discover more about your passion for
              motorcycles. Become a part of the Moto Hub family today!
            </p>
          </div>
        </section>
      </Footer>
    </div>
  );
};

export default About;
