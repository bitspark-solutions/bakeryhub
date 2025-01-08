import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    rating: 5,
    text: 'The best bakery in town! Their chocolate cake is absolutely divine.',
    favorite: 'Chocolate Dream Cake'
  },
  {
    id: 2,
    name: 'Michael Chen',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    rating: 5,
    text: 'Fresh bread daily and the most amazing croissants I\'ve ever had.',
    favorite: 'Butter Croissant'
  },
  {
    id: 3,
    name: 'Emma Davis',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    rating: 5,
    text: 'Their vegan options are incredible. Finally found my go-to bakery!',
    favorite: 'Vegan Carrot Cake'
  }
];

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center mb-12"
        >
          What Our Customers Say
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 bg-white rounded-full shadow-md hover:bg-amber-50"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 bg-white rounded-full shadow-md hover:bg-amber-50"
          >
            <ChevronRight size={24} />
          </button>

          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={currentIndex}
              className="text-center"
            >
              <div className="mb-8">
                <motion.img
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full mx-auto object-cover"
                />
              </div>

              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
                ))}
              </div>

              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xl italic text-gray-700 mb-6"
              >
                "{testimonials[currentIndex].text}"
              </motion.blockquote>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <p className="font-semibold text-lg">{testimonials[currentIndex].name}</p>
                <p className="text-gray-500">Favorite: {testimonials[currentIndex].favorite}</p>
              </motion.div>
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-amber-400' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <button className="bg-amber-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-amber-300">
            Share Your Experience
          </button>
        </motion.div>
      </div>
    </section>
  );
}