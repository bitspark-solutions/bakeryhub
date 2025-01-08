import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, ChevronRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'The Art of Sourdough',
    excerpt: 'Learn the secrets of making perfect sourdough bread at home...',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80',
    category: 'Recipes',
    date: '2024-03-15'
  },
  {
    id: 2,
    title: 'Spring Baking Tips',
    excerpt: 'Get ready for spring with these essential baking tips and tricks...',
    image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&q=80',
    category: 'Baking Tips',
    date: '2024-03-10'
  },
  {
    id: 3,
    title: 'Easter Workshop',
    excerpt: 'Join us for a special Easter-themed baking workshop...',
    image: 'https://images.unsplash.com/photo-1519340333755-56e9c1d04579?auto=format&fit=crop&q=80',
    category: 'Events',
    date: '2024-03-05'
  }
];

const categories = ['All', 'Recipes', 'Baking Tips', 'Events'];

export default function Blog() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section ref={ref} className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center mb-12"
        >
          Latest from Our Blog
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="px-6 py-2 rounded-full bg-white text-gray-700 hover:bg-amber-100"
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-400 text-black px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Clock size={16} className="mr-2" />
                  {new Date(post.date).toLocaleDateString()}
                </div>

                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-amber-500 font-semibold"
                >
                  Read More
                  <ChevronRight size={20} className="ml-1" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="bg-amber-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-amber-300">
            View All Posts
          </button>
        </motion.div>
      </div>
    </section>
  );
}