import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Category {
  id: number;
  title: string;
  imageUrl: string;
  path: string;
  count: number;
}

const categories: Category[] = [
  {
    id: 1,
    title: "Sport Bikes",
    imageUrl: "https://images.pexels.com/photos/1715193/pexels-photo-1715193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    path: "/motorcycles?category=sport",
    count: 24
  },
  {
    id: 2,
    title: "Cruisers",
    imageUrl: "https://images.pexels.com/photos/2549942/pexels-photo-2549942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    path: "/motorcycles?category=cruiser",
    count: 18
  },
  {
    id: 3,
    title: "Adventure",
    imageUrl: "https://images.pexels.com/photos/163210/motorcycle-racer-racing-race-163210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    path: "/motorcycles?category=adventure",
    count: 12
  },
  {
    id: 4,
    title: "Touring",
    imageUrl: "https://images.pexels.com/photos/2519374/pexels-photo-2519374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    path: "/motorcycles?category=touring",
    count: 9
  }
];

const FeaturedCategories = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Explore Categories
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(category => (
            <Link 
              key={category.id}
              to={category.path}
              className="group"
            >
              <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform group-hover:-translate-y-1 group-hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={category.imageUrl}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{category.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{category.count} models</span>
                    <div className="text-red-600 group-hover:translate-x-1 transition-transform">
                      <ChevronRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;