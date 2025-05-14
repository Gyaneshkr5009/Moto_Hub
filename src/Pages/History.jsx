import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const History = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main History Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">Our History</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">How Moto Hub Was Born</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Moto Hub started as a small group of motorcycle enthusiasts who were passionate about sharing their
                experiences, reviews, and knowledge with others. Initially, it was a hobby, a community built on social
                media platforms where riders could come together to discuss their love for motorcycles.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                As the community grew, it became clear that there was a need for a dedicated platform that could offer
                a wide range of resources, from motorcycle reviews to discussions about the latest bike tech and trends.
                This realization led to the creation of the Moto Hub website, and the journey towards building the
                thriving community we have today began.
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

export default History;
