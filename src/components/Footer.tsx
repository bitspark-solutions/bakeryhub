import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Facebook, Instagram, Twitter, Send } from 'lucide-react';

export default function Footer() {
  const [ref, inView] = useInView({ triggerOnce: true });

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Twitter, href: '#' }
  ];

  const footerLinks = {
    'Quick Links': ['Home', 'About', 'Menu', 'Events', 'Contact'],
    'Legal': ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
    'Contact': ['123 Baker Street', 'Sweet Town, ST 12345', '(555) 123-4567']
  };

  return (
    <footer ref={ref} className="bg-amber-900 text-amber-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Sweet Delights</h3>
            <p className="mb-6">Bringing joy through delicious, handcrafted pastries since 2010.</p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="hover:text-amber-400"
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([title, links], columnIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + columnIndex * 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                  >
                    <a href="#" className="hover:text-amber-400">
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="mb-4">Subscribe to get special offers and updates.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-full bg-amber-800 text-amber-100 placeholder-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-amber-400 text-amber-900 rounded-r-full hover:bg-amber-300 flex items-center"
              >
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="border-t border-amber-800 pt-8 text-center"
        >
          <p>&copy; {new Date().getFullYear()} Sweet Delights. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}