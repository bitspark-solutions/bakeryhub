import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Heart, Star } from 'lucide-react';

const timeline = [
  {
    year: '2010',
    title: 'Our Beginning',
    description: 'Started as a small family bakery',
    icon: Heart
  },
  {
    year: '2015',
    title: 'First Award',
    description: 'Won Best Local Bakery Award',
    icon: Star
  },
  {
    year: '2023',
    title: 'Expansion',
    description: 'Opened our third location',
    icon: Clock
  }
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Our Story
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <item.icon size={32} className="text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{item.year}</h3>
              <h4 className="text-xl mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-gray-600 leading-relaxed">
            Sweet Delights began with a simple dream: to create delicious, handcrafted pastries that bring joy to our community. Today, we continue this tradition with the same passion and dedication that started it all.
          </p>
        </motion.div>
      </div>
    </section>
  );
}