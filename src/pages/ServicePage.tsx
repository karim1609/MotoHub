import React, { useEffect, useState } from 'react';
import { Calendar, PenTool as Tool, Check, ArrowRight } from 'lucide-react';

const ServicePage = () => {
  const [activeTab, setActiveTab] = useState('maintenance');
  
  useEffect(() => {
    document.title = 'MotoHub - Service & Maintenance';
    window.scrollTo(0, 0);
  }, []);

  const serviceTabs = [
    { id: 'maintenance', label: 'Maintenance' },
    { id: 'repairs', label: 'Repairs' },
    { id: 'customization', label: 'Customization' },
    { id: 'diagnostics', label: 'Diagnostics' }
  ];

  const servicePlans = [
    {
      id: 'basic',
      name: 'Basic Service',
      price: 149,
      description: 'Essential maintenance for regular riders',
      features: [
        'Oil and filter change',
        'Basic safety inspection',
        'Chain adjustment and lubrication',
        'Tire pressure check',
        'Fluid level check'
      ]
    },
    {
      id: 'premium',
      name: 'Premium Service',
      price: 299,
      description: 'Comprehensive care for your motorcycle',
      features: [
        'All Basic Service features',
        'Brake system service',
        'Throttle and clutch adjustment',
        'Air filter replacement',
        'Comprehensive inspection',
        'Electronic system diagnostics'
      ],
      highlighted: true
    },
    {
      id: 'complete',
      name: 'Complete Overhaul',
      price: 499,
      description: 'Deep maintenance for optimal performance',
      features: [
        'All Premium Service features',
        'Valve clearance adjustment',
        'Carburetor/fuel injection tuning',
        'Cooling system service',
        'Full electrical system check',
        'Suspension inspection and adjustment',
        'Wheel alignment and balancing'
      ]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gray-900 rounded-lg overflow-hidden mb-12">
          <div className="relative h-80 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>
            <img 
              src="https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Motorcycle Service"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center z-20 p-8">
              <div className="max-w-xl">
                <h1 className="text-4xl font-bold text-white mb-4">Expert Motorcycle Service</h1>
                <p className="text-gray-300 text-lg mb-6">
                  Our factory-trained technicians provide professional service and maintenance for all makes and models.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="py-3 px-6 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Book Appointment
                  </button>
                  <a href="#service-plans" className="py-3 px-6 bg-white text-gray-900 font-semibold rounded-md hover:bg-gray-100 transition-colors">
                    View Service Plans
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Tabs */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="flex overflow-x-auto scrollbar-hide">
              {serviceTabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 text-center flex-1 whitespace-nowrap font-semibold ${
                    activeTab === tab.id
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  } transition-colors`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            <div className="p-6">
              {activeTab === 'maintenance' && (
                <div>
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Routine Maintenance</h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Regular maintenance is essential to keep your motorcycle running smoothly and safely. 
                        Our certified technicians follow manufacturer-specified service intervals to ensure optimal performance.
                      </p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">Oil and filter changes</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">Brake system service</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">Chain and sprocket maintenance</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">Valve clearance adjustment</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">Complete safety inspection</span>
                        </li>
                      </ul>
                      <button className="py-2 px-6 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors">
                        Schedule Service
                      </button>
                    </div>
                    <div className="md:w-1/2">
                      <img 
                        src="https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="Motorcycle Maintenance"
                        className="rounded-lg shadow-md w-full h-64 md:h-80 object-cover"
                      />
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'repairs' && (
                <div>
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Repairs & Troubleshooting</h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Our experienced technicians can diagnose and repair any issue with your motorcycle, 
                        from minor fixes to major repairs. We use state-of-the-art equipment and genuine parts.
                      </p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">Engine rebuilds and repairs</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">Electrical system troubleshooting</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">Fuel system service</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">Cooling system repairs</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">Suspension rebuilds</span>
                        </li>
                      </ul>
                      <button className="py-2 px-6 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors">
                        Request Repair
                      </button>
                    </div>
                    <div className="md:w-1/2">
                      <img 
                        src="https://images.pexels.com/photos/4480524/pexels-photo-4480524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="Motorcycle Repair"
                        className="rounded-lg shadow-md w-full h-64 md:h-80 object-cover"
                      />
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'customization' && (
                <div>
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Customization & Upgrades</h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Transform your motorcycle with our professional customization services. 
                        From performance upgrades to aesthetic modifications, we can help you create a unique ride.
                      </p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">Performance tuning</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">Exhaust system upgrades</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">Suspension modifications</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">Custom paint and graphics</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">Accessory installation</span>
                        </li>
                      </ul>
                      <button className="py-2 px-6 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors">
                        Customize Your Bike
                      </button>
                    </div>
                    <div className="md:w-1/2">
                      <img 
                        src="https://images.pexels.com/photos/995487/pexels-photo-995487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="Motorcycle Customization"
                        className="rounded-lg shadow-md w-full h-64 md:h-80 object-cover"
                      />
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'diagnostics' && (
                <div>
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Advanced Diagnostics</h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Our state-of-the-art diagnostic equipment can identify issues quickly and accurately. 
                        We use the latest technology to pinpoint problems and provide efficient solutions.
                      </p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">Computerized diagnostics</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">Performance testing</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">Electrical system analysis</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">Fuel injection system testing</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">ECU programming and updates</span>
                        </li>
                      </ul>
                      <button className="py-2 px-6 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors">
                        Schedule Diagnostics
                      </button>
                    </div>
                    <div className="md:w-1/2">
                      <img 
                        src="https://images.pexels.com/photos/4489724/pexels-photo-4489724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="Motorcycle Diagnostics"
                        className="rounded-lg shadow-md w-full h-64 md:h-80 object-cover"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Service Plans */}
        <section id="service-plans" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Service Plans</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicePlans.map((plan) => (
              <div 
                key={plan.id}
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:-translate-y-2 ${
                  plan.highlighted ? 'ring-2 ring-red-500 relative' : ''
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-0 right-0 bg-red-600 text-white text-center py-1 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className={`p-6 ${plan.highlighted ? 'pt-8' : ''}`}>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-red-600">${plan.price}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    className={`w-full py-3 px-4 rounded-md font-semibold transition-colors flex items-center justify-center ${
                      plan.highlighted 
                        ? 'bg-red-600 text-white hover:bg-red-700' 
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    Select Plan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Appointment Booking */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <Calendar className="h-8 w-8 text-red-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Book an Appointment</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Schedule your service appointment at a time that's convenient for you. 
                  Our expert technicians are ready to provide the care your motorcycle deserves.
                </p>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Service Type
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                      <option value="">Select a service</option>
                      <option value="maintenance">Regular Maintenance</option>
                      <option value="repair">Repair Service</option>
                      <option value="inspection">Safety Inspection</option>
                      <option value="modification">Custom Modification</option>
                      <option value="diagnostic">Diagnostic Check</option>
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Preferred Date
                      </label>
                      <input 
                        type="date" 
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Preferred Time
                      </label>
                      <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
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
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="Full Name"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Phone
                      </label>
                      <input 
                        type="tel" 
                        placeholder="Your Phone Number"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email
                      </label>
                      <input 
                        type="email" 
                        placeholder="Your Email Address"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Additional Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Please provide any specific details about your service needs..."
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white resize-none"
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
              
              <div className="bg-gray-100 dark:bg-gray-700 p-8 hidden lg:block">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Why Choose Us</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-red-600 p-2 rounded-md mr-4">
                      <Tool className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Expert Technicians</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Factory-trained mechanics with years of experience
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-red-600 p-2 rounded-md mr-4">
                      <Check className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Quality Parts</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        We use only genuine or high-quality aftermarket parts
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-red-600 p-2 rounded-md mr-4">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Convenient Scheduling</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Flexible appointment times to fit your schedule
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-12">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Service Hours</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span className="text-gray-700 dark:text-gray-300">Monday - Friday:</span>
                        <span className="text-gray-900 dark:text-white font-medium">8AM - 6PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-700 dark:text-gray-300">Saturday:</span>
                        <span className="text-gray-900 dark:text-white font-medium">9AM - 5PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-700 dark:text-gray-300">Sunday:</span>
                        <span className="text-gray-900 dark:text-white font-medium">Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Alex Johnson",
                bike: "Kawasaki Ninja ZX-10R",
                text: "The service team at MotoHub is exceptional. They diagnosed and fixed an electrical issue that two other shops couldn't figure out. Fast, professional, and fairly priced!"
              },
              {
                name: "Sarah Martinez",
                bike: "Honda CB650R",
                text: "I've been bringing my CB650R here for maintenance for years. The technicians are knowledgeable and take the time to explain what they're doing. My bike has never run better!"
              },
              {
                name: "Michael Chen",
                bike: "BMW R1250GS",
                text: "The customization work they did on my GS was outstanding. The attention to detail and quality of workmanship exceeded my expectations. Highly recommended for any adventure rider."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.bike}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicePage;