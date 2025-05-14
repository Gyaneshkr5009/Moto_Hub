import React from 'react'

const InfoSection = () => {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 md:items-center">
          
          {/* Left Side - Text Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
              Discover Your Perfect Ride
            </h2>

            <p className="text-lg text-gray-700">
              At Moto Hub, we bring you a marketplace for cars, bikes, trucks, and more. Whether you're buying, selling, or exploring the latest models, our platform connects enthusiasts with the best deals, expert reviews, and in-depth insights. Join our community and find your perfect ride today!
            </p>
          </div>

          {/* Right Side - Image Section */}
          <div className="flex justify-center">
            <img
              src="https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="rounded-xl shadow-xl transition-all duration-500 transform hover:scale-105"
              alt="Moto Hub"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoSection
