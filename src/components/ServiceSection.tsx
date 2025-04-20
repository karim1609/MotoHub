import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, PenTool as Tool, ShieldCheck, Award } from 'lucide-react';

const ServiceSection = () => {
  const services = [
    {
      id: 1,
      icon: <Tool className="h-12 w-12 text-red-600" />,
      title: "Maintenance & Repairs",
      description: "Expert mechanics for routine maintenance, performance tuning, and complex repairs."
    },
    {
      id: 2,
      icon: <ShieldCheck className="h-12 w-12 text-red-600" />,
      title: "Safety Inspections",
      description: "Comprehensive safety checks to keep you and your bike secure on the road."
    },
    {
      id: 3,
      icon: <Award className="h-12 w-12 text-red-600" />,
      title: "Custom Modifications",
      description: "Personalize your ride with professional aftermarket modifications and upgrades."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Motorcycle Service
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Our factory-trained technicians provide expert service for all makes and models. 
              Schedule your maintenance, repairs, or customization with our certified team.
            </p>
            
            <div className="space-y-6">
              {services.map(service => (
                <div key={service.id} className="flex items-start">
                  <div className="mr-4">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/service"
                className="py-3 px-6 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors"
              >
                Book a Service
              </Link>
              <Link
                to="/service#pricing"
                className="py-3 px-6 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                View Service Plans
              </Link>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8">
            <div className="flex items-center mb-6">
              <Calendar className="h-8 w-8 text-red-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Book an Appointment</h3>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Service Type
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                  <option value="">Select a service</option>
                  <option value="maintenance">Regular Maintenance</option>
                  <option value="repair">Repair Service</option>
                  <option value="inspection">Safety Inspection</option>
                  <option value="modification">Custom Modification</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Preferred Date
                  </label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Preferred Time
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                    <option value="">Select time</option>
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 3PM)</option>
                    <option value="evening">Evening (3PM - 6PM)</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Motorcycle Details
                </label>
                <input 
                  type="text" 
                  placeholder="Year, Make, Model"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Additional Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Please provide any specific details about your service needs..."
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors"
              >
                Schedule Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;