import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Info } from 'lucide-react';

interface Motorcycle {
  id: number;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
  specs: {
    engine: string;
    power: string;
    topSpeed: string;
  };
  isNew: boolean;
}

const motorcycles: Motorcycle[] = [
  {
    id: 1,
    name: "Ninja ZX-10R",
    price: 16799,
    category: "Sport",
    imageUrl: "https://images.pexels.com/photos/2611690/pexels-photo-2611690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    specs: {
      engine: "998cc",
      power: "203 HP",
      topSpeed: "186 mph"
    },
    isNew: true
  },
  {
    id: 2,
    name: "Rebel 500",
    price: 6799,
    category: "Cruiser",
    imageUrl: "https://images.pexels.com/photos/5626227/pexels-photo-5626227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    specs: {
      engine: "471cc",
      power: "46 HP",
      topSpeed: "95 mph"
    },
    isNew: false
  },
  {
    id: 3,
    name: "Africa Twin",
    price: 14999,
    category: "Adventure",
    imageUrl: "https://images.pexels.com/photos/2393821/pexels-photo-2393821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    specs: {
      engine: "1084cc",
      power: "101 HP",
      topSpeed: "130 mph"
    },
    isNew: true
  },
  {
    id: 4,
    name: "Gold Wing",
    price: 25000,
    category: "Touring",
    imageUrl: "https://images.pexels.com/photos/17379070/pexels-photo-17379070/free-photo-of-harley-davidson-motorcycle-on-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    specs: {
      engine: "1833cc",
      power: "126 HP",
      topSpeed: "112 mph"
    },
    isNew: false
  },
  {
    id: 5,
    name: "Street Triple",
    price: 9900,
    category: "Street",
    imageUrl: "https://images.pexels.com/photos/39693/motorcycle-racer-racing-race-speed-39693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    specs: {
      engine: "765cc",
      power: "118 HP",
      topSpeed: "145 mph"
    },
    isNew: true
  }
];

const FeaturedMotorcycles = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % motorcycles.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => 
      prevIndex === 0 ? motorcycles.length - 1 : prevIndex - 1
    );
  };

  // Create a circular array view based on startIndex
  const visibleMotorcycles = [...Array(itemsPerPage)].map((_, idx) => {
    const index = (startIndex + idx) % motorcycles.length;
    return motorcycles[index];
  });

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Featured Motorcycles
          </h2>
          <div className="flex space-x-2">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Previous motorcycles"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Next motorcycles"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleMotorcycles.map((motorcycle) => (
            <div 
              key={motorcycle.id} 
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={motorcycle.imageUrl}
                  alt={motorcycle.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {motorcycle.isNew && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    New
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{motorcycle.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{motorcycle.category}</p>
                  </div>
                  <p className="text-xl font-bold text-red-600">${motorcycle.price.toLocaleString()}</p>
                </div>
                
                <div className="grid grid-cols-3 gap-4 my-4">
                  <div className="text-center">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Engine</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{motorcycle.specs.engine}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Power</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{motorcycle.specs.power}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Top Speed</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{motorcycle.specs.topSpeed}</p>
                  </div>
                </div>
                
                <div className="flex space-x-3 mt-6">
                  <Link
                    to={`/motorcycles/${motorcycle.id}`}
                    className="flex-1 py-2 px-4 bg-red-600 text-white text-center font-semibold rounded hover:bg-red-700 transition-colors"
                  >
                    View Details
                  </Link>
                  <button 
                    className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="More information"
                  >
                    <Info size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link
            to="/motorcycles"
            className="inline-block py-3 px-6 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
          >
            View All Motorcycles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMotorcycles;