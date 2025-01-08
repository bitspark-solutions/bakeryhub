import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, MapPin } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "Bread Making Workshop",
    date: '2024-03-25',
    time: '10:00 AM - 1:00 PM',
    location: 'Main Bakery',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80',
    description: 'Learn the art of bread making from our master bakers.'
  },
  {
    id: 2,
    title: "Kids Baking Class",
    date: '2024-03-30',
    time: '2:00 PM - 4:00 PM',
    location: 'Workshop Space',
    image: 'https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?auto=format&fit=crop&q=80',
    description: 'A fun-filled baking session for children aged 7-12.'
  },
  {
    id: 3,
    title: "Easter Special Decorating",
    date: '2024-04-05',
    time: '11:00 AM - 2:00 PM',
    location: 'Main Bakery',
    image: 'https://images.unsplash.com/photo-1519340333755-56e9c1d04579?auto=format&fit=crop&q=80',
    description: 'Create beautiful Easter-themed cake decorations.'
  }
];

export default function Events() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center mb-12"
        >
          Upcoming Events
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-500">
                    <Calendar size={16} className="mr-2" />
                    {new Date(event.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Clock size={16} className="mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin size={16} className="mr-2" />
                    {event.location}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-amber-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-amber-300"
                >
                  Register Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="bg-amber-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-amber-300">
            View All Events
          </button>
        </motion.div>
      </div>
    </section>
  );
}