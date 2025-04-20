import React, { useState, useEffect, useRef } from 'react';

interface Stat {
  id: number;
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

const stats: Stat[] = [
  { id: 1, value: 500, label: "Bikes Sold", suffix: "+" },
  { id: 2, value: 15, label: "Years Experience", suffix: "+" },
  { id: 3, value: 98, label: "Satisfaction Rate", suffix: "%" },
  { id: 4, value: 5000, label: "Happy Riders", suffix: "+" }
];

const StatCounter = () => {
  const [inView, setInView] = useState(false);
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!inView) return;

    const intervals = stats.map((stat, index) => {
      const duration = 2000; // 2 seconds animation
      const steps = 20;
      const increment = stat.value / steps;
      
      return setInterval(() => {
        setCounts(prevCounts => {
          const newCounts = [...prevCounts];
          const newValue = Math.min(prevCounts[index] + increment, stat.value);
          newCounts[index] = Math.floor(newValue);
          return newCounts;
        });
      }, duration / steps);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [inView]);

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-gray-900 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.id} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">
                {stat.prefix || ''}{Math.floor(counts[index])}{stat.suffix || ''}
              </div>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatCounter;