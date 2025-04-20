import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PartCategory {
  id: number;
  name: string;
  imageUrl: string;
  path: string;
  featuredItems: number;
}

const categories: PartCategory[] = [
  {
    id: 1,
    name: "Performance Parts",
    imageUrl: "https://images.pexels.com/photos/995487/pexels-photo-995487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    path: "/parts/performance",
    featuredItems: 124
  },
  {
    id: 2,
    name: "Maintenance & Service",
    imageUrl: "https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    path: "/parts/maintenance",
    featuredItems: 237
  },
  {
    id: 3,
    name: "Rider Gear",
    imageUrl: "https://images.pexels.com/photos/2611685/pexels-photo-2611685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    path: "/parts/gear",
    featuredItems: 189
  }
];

const PartsSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Parts & Accessories
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
              Browse our extensive catalog of OEM and aftermarket parts, accessories, and riding gear to enhance your motorcycle experience.
            </p>
          </div>
          <Link
            to="/parts"
            className="mt-4 md:mt-0 flex items-center font-semibold text-red-600 hover:text-red-700 transition-colors"
          >
            View all categories
            <ChevronRight className="h-5 w-5 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map(category => (
            <div 
              key={category.id}
              className="group overflow-hidden rounded-lg shadow-lg bg-gray-50 dark:bg-gray-800"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={category.imageUrl} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {category.name}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {category.featuredItems} products
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Find the highest quality {category.name.toLowerCase()} from top brands to optimize your ride experience.
                </p>
                <Link
                  to={category.path}
                  className="inline-flex items-center font-medium text-red-600 hover:text-red-700 transition-colors"
                >
                  Shop Now
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartsSection;