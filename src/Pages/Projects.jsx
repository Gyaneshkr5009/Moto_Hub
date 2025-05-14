import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Projects = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main Projects Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">Our Projects</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Project 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Moto Hub Community Platform</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Moto Hub's core project is to create a comprehensive online platform for motorcycle enthusiasts. It serves as a community where riders can share their experiences, discuss the latest bike models, and exchange knowledge about various bike-related topics.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                The platform allows users to post reviews, explore motorcycle-related content, and connect with like-minded individuals. We also offer in-depth guides, reviews, and articles on a variety of motorcycles, making it the go-to destination for motor enthusiasts looking for the latest news and updates in the motorcycle world.
              </p>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Bike Reviews and Comparison Tool</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                A key feature of Moto Hub is our Bike Reviews and Comparison Tool. With this tool, users can compare different motorcycle models based on various criteria, including performance, features, and pricing. The tool allows riders to make informed decisions by comparing bikes side-by-side.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                We aim to provide authentic, unbiased reviews based on real user experiences and expert opinions, ensuring our community receives the most accurate and reliable information.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {/* Project 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Moto Hub Marketplace</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                In the future, we plan to launch the Moto Hub Marketplace—a one-stop-shop for motorcycle accessories, parts, and gear. This will enable users to buy and sell products within the Moto Hub community, creating a trusted and reliable marketplace.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                The marketplace will feature trusted sellers, secure payment options, and a seamless shopping experience designed specifically for motorbike enthusiasts.
              </p>
            </div>

            {/* Project 4 */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Moto Hub Content Hub</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Another important project is the Moto Hub Content Hub, which houses articles, how-to guides, reviews, and tutorials. This resource center is designed to educate riders on everything from motorcycle maintenance to new bike technologies.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                The goal of the Content Hub is to empower riders by providing them with the knowledge and resources they need to improve their riding skills, maintain their bikes, and stay informed about the latest trends in the motorcycle industry.
              </p>
            </div>
          </div>

          {/* Our Vision Section */}
          <div className="bg-gray-200 p-12 mt-16 rounded-xl text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision for the Future</h2>
            <p className="text-lg text-gray-700">
              Moto Hub is not just a website; it’s a movement. Our vision is to build a global community where motorcycle enthusiasts can learn, share, and grow together. We strive to be the most trusted source for motorcycle reviews, news, and community discussions. By expanding our features and projects, we aim to create an all-encompassing platform that connects riders from every corner of the world.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Projects;
