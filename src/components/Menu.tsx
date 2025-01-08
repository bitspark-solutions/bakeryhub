import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cake, Coffee, Wheat, Cookie } from 'lucide-react';
import { useState } from 'react';
interface MenuItem {
  name: string;
  price: number;
  ingredients: string;
  dietary: string[];
}

interface MenuItems {
  [key: string]: MenuItem[];
}
const menuItems : MenuItems = {
  Cakes: [
    { name: 'Chocolate Dream', price: 45, ingredients: 'Dark chocolate, cream, vanilla', dietary: ['gluten-free'] },
    { name: 'Red Velvet', price: 40, ingredients: 'Cocoa, buttermilk, cream cheese', dietary: [] },
    { name: 'Carrot Cake', price: 38, ingredients: 'Carrots, walnuts, cinnamon', dietary: ['vegan'] }
  ],
  Pastries: [
    { name: 'Croissant', price: 4, ingredients: 'Butter, flour, yeast', dietary: [] },
    { name: 'Vegan Muffin', price: 5, ingredients: 'Oat milk, berries, flour', dietary: ['vegan'] },
    { name: 'Danish', price: 4.5, ingredients: 'Puff pastry, fruits, almonds', dietary: [] }
  ],
  Breads: [
    { name: 'Sourdough', price: 7, ingredients: 'Flour, water, salt', dietary: ['vegan'] },
    { name: 'Rye Bread', price: 6, ingredients: 'Rye flour, seeds, salt', dietary: ['vegan'] },
    { name: 'Brioche', price: 8, ingredients: 'Butter, eggs, flour', dietary: [] }
  ],
  Beverages: [
    { name: 'Cappuccino', price: 4.5, ingredients: 'Espresso, milk, foam', dietary: [] },
    { name: 'Matcha Latte', price: 5, ingredients: 'Matcha, oat milk', dietary: ['vegan'] },
    { name: 'Hot Chocolate', price: 4, ingredients: 'Dark chocolate, milk', dietary: ['gluten-free'] }
  ]
};

const categoryIcons = {
  Cakes: Cake,
  Pastries: Cookie,
  Breads: Wheat,
  Beverages: Coffee
};

export default function Menu() {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [activeCategory, setActiveCategory] = useState('Cakes');
  const [dietaryFilter, setDietaryFilter] = useState('all');

  const filteredItems = menuItems[activeCategory].filter(item => 
    dietaryFilter === 'all' || item.dietary.includes(dietaryFilter)
  );

  return (
    <section ref={ref} className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Menu
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.keys(menuItems).map((category, index) => {
            const Icon = categoryIcons[category];
            return (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full ${
                  activeCategory === category 
                    ? 'bg-amber-400 text-white' 
                    : 'bg-white text-gray-700 hover:bg-amber-100'
                }`}
              >
                <Icon size={20} />
                {category}
              </motion.button>
            );
          })}
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {['all', 'vegan', 'gluten-free'].map((filter, index) => (
            <motion.button
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
              onClick={() => setDietaryFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm ${
                dietaryFilter === filter 
                  ? 'bg-green-500 text-white' 
                  : 'bg-white text-gray-700 hover:bg-green-100'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </motion.button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-2">{item.ingredients}</p>
              <p className="text-amber-500 font-bold">${item.price}</p>
              {item.dietary.length > 0 && (
                <div className="flex gap-2 mt-2">
                  {item.dietary.map(diet => (
                    <span key={diet} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      {diet}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}