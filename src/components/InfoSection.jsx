import React from 'react'

const InfoSection = () => {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 md:items-center">
          
          {/* Left Side - Text Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
              Discover the Future of Motorcycling
            </h2>

            <p className="text-lg text-gray-700">
              At Moto Hub, we are redefining the motorcycling experience by connecting enthusiasts, sharing expert reviews, and providing in-depth insights into the latest trends and technologies. Join us as we explore the world of two-wheelers with a community-driven approach.
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
