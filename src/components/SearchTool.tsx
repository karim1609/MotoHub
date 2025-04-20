import React, { useState } from 'react';
import { Sliders, Search } from 'lucide-react';

interface FilterOption {
  min: number;
  max: number;
  value: number;
  label: string;
  unit?: string;
}

const SearchTool = () => {
  const [filters, setFilters] = useState({
    price: { min: 3000, max: 30000, value: 15000 },
    power: { min: 20, max: 200, value: 100 },
    engine: { min: 125, max: 2000, value: 750 },
    weight: { min: 300, max: 800, value: 500 }
  });
  
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  
  const handleFilterChange = (
    filterName: 'price' | 'power' | 'engine' | 'weight', 
    newValue: number
  ) => {
    setFilters({
      ...filters,
      [filterName]: {
        ...filters[filterName],
        value: newValue
      }
    });
  };
  
  const toggleType = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type) 
        : [...prev, type]
    );
  };
  
  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand) 
        : [...prev, brand]
    );
  };
  
  const formatValue = (filter: FilterOption) => {
    return `${filter.value.toLocaleString()}${filter.unit || ''}`;
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would trigger a search with the selected filters
    console.log("Search with:", { filters, selectedTypes, selectedBrands });
  };
  
  const bikeTypes = ["Sport", "Cruiser", "Touring", "Adventure", "Standard", "Dirt", "Scooter"];
  const brands = ["Honda", "Yamaha", "Kawasaki", "Suzuki", "Harley-Davidson", "BMW", "Ducati", "Triumph"];
  
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-10">
            <Sliders className="h-8 w-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Find Your Perfect Bike
            </h2>
          </div>
          
          <form onSubmit={handleSearch} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Specifications</h3>
                
                {Object.entries(filters).map(([key, filter]) => (
                  <div key={key} className="mb-6">
                    <div className="flex justify-between mb-2">
                      <label className="text-base font-medium text-gray-700 dark:text-gray-300 capitalize">
                        {key === 'engine' ? 'Engine Size (cc)' : `${key.charAt(0).toUpperCase() + key.slice(1)} ${key === 'price' ? '($)' : key === 'power' ? '(HP)' : '(lbs)'}`}
                      </label>
                      <span className="text-red-600 font-semibold">
                        {key === 'price' ? '$' : ''}{formatValue(filter as FilterOption)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={filter.min}
                      max={filter.max}
                      value={filter.value}
                      onChange={(e) => handleFilterChange(key as 'price' | 'power' | 'engine' | 'weight', parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-red-600"
                    />
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                      <span>{key === 'price' ? '$' : ''}{filter.min}{key === 'engine' ? 'cc' : key === 'power' ? 'HP' : key === 'weight' ? 'lbs' : ''}</span>
                      <span>{key === 'price' ? '$' : ''}{filter.max}{key === 'engine' ? 'cc' : key === 'power' ? 'HP' : key === 'weight' ? 'lbs' : ''}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Bike Type</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {bikeTypes.map(type => (
                      <label 
                        key={type}
                        className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer transition-colors ${
                          selectedTypes.includes(type) 
                            ? 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300' 
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={selectedTypes.includes(type)}
                          onChange={() => toggleType(type)}
                          className="sr-only"
                        />
                        <span className={`h-4 w-4 rounded-sm border ${
                          selectedTypes.includes(type) 
                            ? 'bg-red-600 border-red-600' 
                            : 'bg-white dark:bg-gray-600 border-gray-300 dark:border-gray-500'
                        } flex items-center justify-center`}>
                          {selectedTypes.includes(type) && (
                            <span className="h-2 w-2 bg-white rounded-sm"></span>
                          )}
                        </span>
                        <span>{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Brand</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {brands.map(brand => (
                      <label 
                        key={brand}
                        className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer transition-colors ${
                          selectedBrands.includes(brand) 
                            ? 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300' 
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => toggleBrand(brand)}
                          className="sr-only"
                        />
                        <span className={`h-4 w-4 rounded-sm border ${
                          selectedBrands.includes(brand) 
                            ? 'bg-red-600 border-red-600' 
                            : 'bg-white dark:bg-gray-600 border-gray-300 dark:border-gray-500'
                        } flex items-center justify-center`}>
                          {selectedBrands.includes(brand) && (
                            <span className="h-2 w-2 bg-white rounded-sm"></span>
                          )}
                        </span>
                        <span>{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <button
                type="submit"
                className="flex items-center py-3 px-8 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors"
              >
                <Search className="h-5 w-5 mr-2" />
                Find Bikes
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchTool;