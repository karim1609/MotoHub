import React, { useEffect } from 'react';
import { Search } from 'lucide-react';

const PartsPage = () => {
  useEffect(() => {
    document.title = 'MotoHub - Parts & Accessories';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gray-900 rounded-lg overflow-hidden mb-8">
          <div className="relative h-72 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>
            <img 
              src="https://images.pexels.com/photos/995487/pexels-photo-995487.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Parts and Accessories"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center z-20 p-8">
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">Parts & Accessories</h1>
                <p className="text-gray-300 text-lg max-w-xl">
                  Original equipment and aftermarket parts to keep your bike performing at its best.
                </p>
                
                {/* Search Bar */}
                <div className="mt-6 max-w-md">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search for parts by name, model, or OEM #"
                      className="w-full pl-4 pr-12 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-white/70"
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white">
                      <Search className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Shop By Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Engine", image: "https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
              { name: "Exhaust", image: "https://images.pexels.com/photos/2611690/pexels-photo-2611690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
              { name: "Brakes", image: "https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
              { name: "Tires", image: "https://images.pexels.com/photos/2519374/pexels-photo-2519374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
              { name: "Helmets", image: "https://images.pexels.com/photos/2611685/pexels-photo-2611685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
              { name: "Accessories", image: "https://images.pexels.com/photos/995487/pexels-photo-995487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
            ].map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform group-hover:-translate-y-1 group-hover:shadow-lg">
                  <div className="h-32 overflow-hidden">
                    <img 
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{category.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Parts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Top Sellers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={`https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                    alt={`Part ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Performance Part {index + 1}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">Compatible with multiple models</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-red-600">${(99 + index * 20).toFixed(2)}</span>
                    <button className="px-3 py-1 bg-red-600 text-white text-sm font-medium rounded hover:bg-red-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Shop by Bike */}
        <section className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Shop Parts By Motorcycle</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Find parts specifically designed for your motorcycle model.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Make
                </label>
                <select className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                  <option value="">Select Make</option>
                  <option value="honda">Honda</option>
                  <option value="yamaha">Yamaha</option>
                  <option value="kawasaki">Kawasaki</option>
                  <option value="suzuki">Suzuki</option>
                  <option value="harley">Harley-Davidson</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Model
                </label>
                <select className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                  <option value="">Select Model</option>
                  <option value="cbr">CBR650R</option>
                  <option value="ninja">Ninja ZX-10R</option>
                  <option value="r1">YZF-R1</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Year
                </label>
                <select className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                  <option value="">Select Year</option>
                  {[...Array(10)].map((_, i) => (
                    <option key={i} value={2015 + i}>{2015 + i}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <button className="mt-6 px-6 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition-colors">
              Find Parts
            </button>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Performance Parts", image: "https://images.pexels.com/photos/995487/pexels-photo-995487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", items: 124 },
              { name: "Riding Gear", image: "https://images.pexels.com/photos/2611685/pexels-photo-2611685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", items: 89 },
              { name: "Maintenance & Service", image: "https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", items: 156 }
            ].map((category, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
                <div className="h-56 relative">
                  <img 
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {category.name}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {category.items} products
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <button className="w-full py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition-colors">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Brands Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Popular Brands</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg p-4 h-24">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">Brand {index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PartsPage;