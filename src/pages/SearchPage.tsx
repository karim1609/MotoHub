import React, { useState, useEffect } from 'react';
import { Sliders, ChevronDown, ChevronUp, ThumbsUp, Filter } from 'lucide-react';

const SearchPage = () => {
  const [expandedFilters, setExpandedFilters] = useState(true);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  useEffect(() => {
    document.title = 'MotoHub - Find Your Perfect Bike';
    window.scrollTo(0, 0);
  }, []);

  const toggleFilters = () => {
    setExpandedFilters(!expandedFilters);
  };

  const toggleMobileFilters = () => {
    setMobileFiltersOpen(!mobileFiltersOpen);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gray-900 rounded-lg overflow-hidden mb-8">
          <div className="relative h-64 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>
            <img 
              src="https://images.pexels.com/photos/3720778/pexels-photo-3720778.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Find Your Perfect Bike"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center z-20 p-8">
              <div>
                <h1 className="text-4xl font-bold text-white mb-4">Find Your Perfect Bike</h1>
                <p className="text-gray-300 text-lg max-w-xl">
                  Answer a few questions about your riding style and preferences to discover the ideal motorcycle for you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile filters toggle */}
        <div className="lg:hidden mb-4">
          <button
            onClick={toggleMobileFilters}
            className="w-full flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-md shadow"
          >
            <div className="flex items-center">
              <Filter className="h-5 w-5 mr-2 text-gray-600 dark:text-gray-400" />
              <span className="font-medium text-gray-900 dark:text-white">Bike Finder Filters</span>
            </div>
            {mobileFiltersOpen ? (
              <ChevronUp className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            )}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Section */}
          <div 
            className={`${
              mobileFiltersOpen ? 'block' : 'hidden'
            } lg:block lg:w-1/3 xl:w-1/4`}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden sticky top-24">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Sliders className="h-6 w-6 text-red-600 mr-2" />
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">Bike Finder</h2>
                  </div>
                  <button 
                    onClick={toggleFilters}
                    className="lg:hidden p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    {expandedFilters ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                </div>

                <div className={`${expandedFilters ? 'block' : 'hidden lg:block'} space-y-6`}>
                  {/* Rider Experience */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Rider Experience
                    </h3>
                    <div className="space-y-2">
                      {['Beginner', 'Intermediate', 'Experienced'].map(level => (
                        <label key={level} className="flex items-center">
                          <input 
                            type="radio" 
                            name="experience" 
                            className="h-4 w-4 text-red-600"
                          />
                          <span className="ml-2 text-gray-700 dark:text-gray-300">{level}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Riding Style */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Riding Style
                    </h3>
                    <div className="space-y-2">
                      {[
                        'Daily Commuting', 
                        'Weekend Cruising', 
                        'Sport Riding', 
                        'Long Distance Touring', 
                        'Off-Road Adventures',
                        'Track Racing'
                      ].map(style => (
                        <label key={style} className="flex items-center">
                          <input 
                            type="checkbox" 
                            className="h-4 w-4 rounded text-red-600"
                          />
                          <span className="ml-2 text-gray-700 dark:text-gray-300">{style}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Budget
                      </h3>
                      <span className="text-red-600 font-semibold">$15,000</span>
                    </div>
                    <input
                      type="range"
                      min="5000"
                      max="30000"
                      step="1000"
                      defaultValue="15000"
                      className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-red-600"
                    />
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                      <span>$5,000</span>
                      <span>$30,000</span>
                    </div>
                  </div>

                  {/* Engine Size */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Engine Size (cc)
                      </h3>
                      <span className="text-red-600 font-semibold">750cc</span>
                    </div>
                    <input
                      type="range"
                      min="125"
                      max="1800"
                      step="25"
                      defaultValue="750"
                      className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-red-600"
                    />
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                      <span>125cc</span>
                      <span>1800cc</span>
                    </div>
                  </div>

                  {/* Bike Type */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Bike Type
                    </h3>
                    <div className="space-y-2">
                      {[
                        'Sport', 'Cruiser', 'Touring', 'Adventure', 'Standard', 
                        'Dirt', 'Dual Sport', 'Scooter'
                      ].map(type => (
                        <label key={type} className="flex items-center">
                          <input 
                            type="checkbox" 
                            className="h-4 w-4 rounded text-red-600"
                          />
                          <span className="ml-2 text-gray-700 dark:text-gray-300">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Brand Preference */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Brand Preference
                    </h3>
                    <div className="space-y-2">
                      {[
                        'Honda', 'Yamaha', 'Kawasaki', 'Suzuki', 'Harley-Davidson', 
                        'BMW', 'Ducati', 'Triumph', 'KTM', 'Indian'
                      ].map(brand => (
                        <label key={brand} className="flex items-center">
                          <input 
                            type="checkbox" 
                            className="h-4 w-4 rounded text-red-600"
                          />
                          <span className="ml-2 text-gray-700 dark:text-gray-300">{brand}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Height Consideration */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Rider Height
                    </h3>
                    <select className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                      <option value="">Select rider height</option>
                      <option value="short">Under 5'6" (Short)</option>
                      <option value="average">5'6" - 5'10" (Average)</option>
                      <option value="tall">Over 5'10" (Tall)</option>
                    </select>
                  </div>

                  <button className="w-full py-3 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors flex items-center justify-center">
                    <ThumbsUp className="mr-2 h-5 w-5" />
                    Find Matches
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="lg:w-2/3 xl:w-3/4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Your Matches</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Based on your preferences, we've found these bikes that might be perfect for you.
                Each match shows a compatibility score to help you find your ideal ride.
              </p>

              <div className="space-y-8">
                {/* This would be dynamically generated from your algorithm */}
                {[
                  { 
                    name: "Sport Touring Bike", 
                    match: 95,
                    image: "https://images.pexels.com/photos/2393821/pexels-photo-2393821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    price: 14500,
                    engine: "900cc",
                    type: "Sport Touring",
                    features: ["Great for commuting and weekend trips", "Comfortable ergonomics", "Powerful engine", "Good luggage capacity"],
                    strengths: ["Versatility", "Performance", "Comfort"]
                  },
                  { 
                    name: "Adventure Bike", 
                    match: 87,
                    image: "https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    price: 16800,
                    engine: "1000cc",
                    type: "Adventure",
                    features: ["On and off-road capability", "Long travel suspension", "Upright riding position", "Large fuel tank"],
                    strengths: ["Versatility", "Durability", "Long-distance comfort"]
                  },
                  { 
                    name: "Naked Street Bike", 
                    match: 79,
                    image: "https://images.pexels.com/photos/39693/motorcycle-racer-racing-race-speed-39693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    price: 9800,
                    engine: "650cc",
                    type: "Standard",
                    features: ["Nimble handling", "Upright seating position", "Good for city riding", "Moderate power"],
                    strengths: ["Agility", "Value", "Ease of use"]
                  }
                ].map((bike, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-2/5 relative">
                        <img 
                          src={bike.image} 
                          alt={bike.name}
                          className="w-full h-56 md:h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center flex-col p-2">
                          <span className="text-xl font-bold">{bike.match}%</span>
                          <span className="text-xs">Match</span>
                        </div>
                      </div>
                      
                      <div className="md:w-3/5 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                              {bike.name}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">{bike.type} | {bike.engine}</p>
                          </div>
                          <span className="text-2xl font-bold text-red-600">${bike.price.toLocaleString()}</span>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Key Features</h4>
                          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                            {bike.features.map((feature, i) => (
                              <li key={i}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Strengths</h4>
                          <div className="flex flex-wrap gap-2">
                            {bike.strengths.map((strength, i) => (
                              <span 
                                key={i} 
                                className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm"
                              >
                                {strength}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-3">
                          <button className="py-2 px-6 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors">
                            View Details
                          </button>
                          <button className="py-2 px-6 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white font-semibold rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">
                            Schedule Test Ride
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Questionnaire Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Not sure where to start?</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Take our quick questionnaire to help us understand your riding needs and preferences better. 
                We'll use your answers to recommend the perfect motorcycle for you.
              </p>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Questionnaire</h3>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-base font-medium text-gray-900 dark:text-white mb-2">
                      1. How would you describe your riding experience?
                    </label>
                    <div className="space-y-2">
                      {['Complete beginner', 'Some experience', 'Intermediate', 'Experienced rider'].map((option, index) => (
                        <label key={index} className="flex items-center">
                          <input type="radio" name="experience" className="h-4 w-4 text-red-600" />
                          <span className="ml-2 text-gray-700 dark:text-gray-300">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-base font-medium text-gray-900 dark:text-white mb-2">
                      2. What's your primary intended use for the motorcycle?
                    </label>
                    <select className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                      <option value="">Select primary use</option>
                      <option value="commute">Daily commuting</option>
                      <option value="weekend">Weekend rides</option>
                      <option value="touring">Long-distance touring</option>
                      <option value="offroad">Off-road adventures</option>
                      <option value="track">Track days/racing</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-base font-medium text-gray-900 dark:text-white mb-2">
                      3. What's your budget range?
                    </label>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400">$5,000</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">$30,000</span>
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
                  
                  <div>
                    <label className="block text-base font-medium text-gray-900 dark:text-white mb-2">
                      4. Do you have any physical considerations we should account for?
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 rounded text-red-600" />
                        <span className="ml-2 text-gray-700 dark:text-gray-300">I'm shorter than average (under 5'6")</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 rounded text-red-600" />
                        <span className="ml-2 text-gray-700 dark:text-gray-300">I'm taller than average (over 6')</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 rounded text-red-600" />
                        <span className="ml-2 text-gray-700 dark:text-gray-300">I prefer lighter bikes</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 rounded text-red-600" />
                        <span className="ml-2 text-gray-700 dark:text-gray-300">I have back/joint issues and need comfort</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-base font-medium text-gray-900 dark:text-white mb-2">
                      5. Any specific brands you're interested in?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {['Honda', 'Yamaha', 'Kawasaki', 'Suzuki', 'Harley-Davidson', 'BMW', 'Ducati', 'Triumph', 'KTM', 'Indian'].map((brand, index) => (
                        <label key={index} className="flex items-center">
                          <input type="checkbox" className="h-4 w-4 rounded text-red-600" />
                          <span className="ml-2 text-gray-700 dark:text-gray-300">{brand}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors"
                  >
                    Get Personalized Recommendations
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;