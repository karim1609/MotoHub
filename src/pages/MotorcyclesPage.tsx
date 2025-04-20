import React, { useState, useEffect } from 'react';
import { Filter, Grid, List, ChevronDown, ChevronUp } from 'lucide-react';

const MotorcyclesPage = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    document.title = 'MotoHub - Motorcycles';
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
              src="https://images.pexels.com/photos/2396042/pexels-photo-2396042.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Motorcycles Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center z-20 p-8">
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">Motorcycles</h1>
                <p className="text-gray-300 text-lg max-w-xl">
                  Explore our extensive collection of new and used motorcycles from top manufacturers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Products */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filters Toggle */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="w-full flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-md shadow"
            >
              <div className="flex items-center">
                <Filter className="h-5 w-5 mr-2 text-gray-600 dark:text-gray-400" />
                <span className="font-medium text-gray-900 dark:text-white">Filters</span>
              </div>
              {filtersOpen ? (
                <ChevronUp className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              )}
            </button>
          </div>

          {/* Filters Sidebar */}
          <div className={`${filtersOpen ? 'block' : 'hidden'} lg:block lg:w-1/4`}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Filters</h2>
              
              {/* Filter Groups */}
              <div className="space-y-6">
                {/* Category Filter */}
                <div>
                  <h3 className="text-gray-900 dark:text-white font-semibold mb-3">Category</h3>
                  <div className="space-y-2">
                    {['Sport', 'Cruiser', 'Touring', 'Adventure', 'Standard', 'Dirt'].map((category) => (
                      <label key={category} className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 rounded text-red-600 border-gray-300 focus:ring-red-500" />
                        <span className="ml-2 text-gray-700 dark:text-gray-300">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Brand Filter */}
                <div>
                  <h3 className="text-gray-900 dark:text-white font-semibold mb-3">Brand</h3>
                  <div className="space-y-2">
                    {['Honda', 'Yamaha', 'Kawasaki', 'Suzuki', 'Harley-Davidson', 'BMW', 'Ducati', 'Triumph'].map((brand) => (
                      <label key={brand} className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 rounded text-red-600 border-gray-300 focus:ring-red-500" />
                        <span className="ml-2 text-gray-700 dark:text-gray-300">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Price Range */}
                <div>
                  <h3 className="text-gray-900 dark:text-white font-semibold mb-3">Price Range</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600 dark:text-gray-400">$5,000</span>
                      <span className="text-gray-600 dark:text-gray-400">$30,000</span>
                    </div>
                    <input 
                      type="range" 
                      min="5000" 
                      max="30000" 
                      step="1000" 
                      defaultValue="15000"
                      className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-red-600" 
                    />
                  </div>
                </div>
                
                {/* Engine Size */}
                <div>
                  <h3 className="text-gray-900 dark:text-white font-semibold mb-3">Engine Size (cc)</h3>
                  <div className="space-y-2">
                    {['Under 500cc', '500cc - 750cc', '750cc - 1000cc', 'Over 1000cc'].map((size) => (
                      <label key={size} className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 rounded text-red-600 border-gray-300 focus:ring-red-500" />
                        <span className="ml-2 text-gray-700 dark:text-gray-300">{size}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Year */}
                <div>
                  <h3 className="text-gray-900 dark:text-white font-semibold mb-3">Year</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-sm text-gray-600 dark:text-gray-400">From</label>
                      <select className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                        {[...Array(10)].map((_, i) => (
                          <option key={i} value={2015 + i}>{2015 + i}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600 dark:text-gray-400">To</label>
                      <select className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                        {[...Array(10)].map((_, i) => (
                          <option key={i} value={2015 + i}>{2015 + i}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 space-y-3">
                <button className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition-colors">
                  Apply Filters
                </button>
                <button className="w-full py-2 px-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-semibold rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                  Reset Filters
                </button>
              </div>
            </div>
          </div>
          
          {/* Product Listing */}
          <div className="lg:w-3/4">
            {/* Sorting and View options */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-6 flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-0">
                <label className="text-gray-700 dark:text-gray-300 mr-2">Sort by:</label>
                <select className="p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-gray-700 dark:text-gray-300">View:</span>
                <button
                  onClick={() => setView('grid')}
                  className={`p-2 rounded-md ${
                    view === 'grid' 
                      ? 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  }`}
                  aria-label="Grid view"
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setView('list')}
                  className={`p-2 rounded-md ${
                    view === 'list' 
                      ? 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  }`}
                  aria-label="List view"
                >
                  <List size={20} />
                </button>
              </div>
            </div>
            
            {/* Products Grid View */}
            {view === 'grid' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* This would be dynamically generated from your motorcycle data */}
                {[...Array(9)].map((_, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden group">
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={`https://images.pexels.com/photos/2393821/pexels-photo-2393821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} 
                        alt="Motorcycle"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {index % 3 === 0 && (
                        <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          New
                        </div>
                      )}
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        Sport Bike {index + 1}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">Sport</p>
                      <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                        <div>
                          <span className="text-gray-500 dark:text-gray-400">Engine: </span>
                          <span className="text-gray-900 dark:text-white">1000cc</span>
                        </div>
                        <div>
                          <span className="text-gray-500 dark:text-gray-400">Year: </span>
                          <span className="text-gray-900 dark:text-white">2023</span>
                        </div>
                        <div>
                          <span className="text-gray-500 dark:text-gray-400">Mileage: </span>
                          <span className="text-gray-900 dark:text-white">0 miles</span>
                        </div>
                        <div>
                          <span className="text-gray-500 dark:text-gray-400">Color: </span>
                          <span className="text-gray-900 dark:text-white">Red/Black</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-red-600">${(12000 + index * 1000).toLocaleString()}</span>
                        <button className="px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition-colors">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Products List View */}
            {view === 'list' && (
              <div className="space-y-6">
                {/* This would be dynamically generated from your motorcycle data */}
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 relative">
                        <img 
                          src={`https://images.pexels.com/photos/2393821/pexels-photo-2393821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} 
                          alt="Motorcycle"
                          className="w-full h-64 md:h-full object-cover"
                        />
                        {index % 2 === 0 && (
                          <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            New
                          </div>
                        )}
                      </div>
                      
                      <div className="md:w-2/3 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                              Sport Bike {index + 1}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">Sport</p>
                          </div>
                          <span className="text-2xl font-bold text-red-600">${(12000 + index * 1000).toLocaleString()}</span>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Engine</p>
                            <p className="font-semibold text-gray-900 dark:text-white">1000cc</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Year</p>
                            <p className="font-semibold text-gray-900 dark:text-white">2023</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Mileage</p>
                            <p className="font-semibold text-gray-900 dark:text-white">0 miles</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Color</p>
                            <p className="font-semibold text-gray-900 dark:text-white">Red/Black</p>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                          Experience the thrill of riding with this powerful 1000cc sport bike. 
                          Features include advanced suspension, cutting-edge electronics, and aerodynamic design.
                        </p>
                        
                        <div className="flex space-x-4">
                          <button className="px-6 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition-colors">
                            View Details
                          </button>
                          <button className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-semibold rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                            Test Ride
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                  Previous
                </button>
                {[1, 2, 3, 4, 5].map(page => (
                  <button
                    key={page}
                    className={`px-4 py-2 rounded ${
                      page === 1 
                        ? 'bg-red-600 text-white' 
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                    } transition-colors`}
                  >
                    {page}
                  </button>
                ))}
                <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotorcyclesPage;