import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Career = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main Career Section */}
      <section className="py-20 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">Careers at Moto Hub</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Why Join Us?</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                At Moto Hub, we are building a community of passionate riders and enthusiasts. We believe in
                creating an inclusive, engaging, and creative environment where everyone can contribute and grow.
                Working with us means being part of an innovative team, constantly striving to shape the future of
                the motorcycle community.
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Collaborative work culture</li>
                <li>Opportunities for career growth</li>
                <li>Flexible working hours</li>
                <li>Work with a passionate team of motorcycle enthusiasts</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Current Openings</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-800">Marketing Manager</h3>
                  <p className="text-gray-700">Join our team to lead marketing campaigns and grow the Moto Hub brand.</p>
                  <a href="#" className="text-blue-600 hover:underline">View Job Description</a>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800">Content Writer</h3>
                  <p className="text-gray-700">Help us craft engaging content for our blog, social media, and website.</p>
                  <a href="#" className="text-blue-600 hover:underline">View Job Description</a>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800">Community Manager</h3>
                  <p className="text-gray-700">Be the voice of our community, engage with members, and organize events.</p>
                  <a href="#" className="text-blue-600 hover:underline">View Job Description</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Call to Action */}
      <Footer>
        <section className="bg-gray-800 text-white py-16">
          <div className="max-w-7xl mx-auto text-center px-6">
            <h2 className="text-3xl font-extrabold mb-6">Ready to Join Moto Hub?</h2>
            <p className="text-lg mb-8">
              If you're passionate about motorcycles and want to be a part of an exciting and growing community,
              we’d love to hear from you. Apply for any of our current openings and start your journey with us today!
            </p>
          </div>
        </section>
      </Footer>
    </div>
  );
};

export default Career;
