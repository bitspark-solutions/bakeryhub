import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { X } from 'lucide-react';

const categories = ['All', 'Cakes', 'Cookies', 'Bread', 'Pastries'];

const galleryItems = [
  {
    id: 1,
    category: 'Cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80',
    title: 'Chocolate Layer Cake'
  },
  {
    id: 2,
    category: 'Cookies',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80',
    title: 'Chocolate Chip Cookies'
  },
  {
    id: 3,
    category: 'Bread',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80',
    title: 'Artisan Sourdough'
  },
  {
    id: 4,
    category: 'Pastries',
    image: 'https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&q=80',
    title: 'Fresh Croissants'
  },
  {
    id: 5,
    category: 'Cakes',
    image: 'https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?auto=format&fit=crop&q=80',
    title: 'Red Velvet Cake'
  },
  {
    id: 6,
    category: 'Bread',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80',
    title: 'Rustic Baguettes'
  }
];

export default function Gallery() {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section ref={ref} className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Gallery
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-amber-400 text-white'
                  : 'bg-white text-gray-700 hover:bg-amber-100'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(item)}
              className="cursor-pointer relative group overflow-hidden rounded-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-lg font-semibold">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          >
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-amber-400"
              >
                <X size={24} />
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-white text-center mt-4 text-lg">{selectedImage.title}</p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}