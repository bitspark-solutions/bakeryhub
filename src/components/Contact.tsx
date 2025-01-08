import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section ref={ref} className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center mb-12"
        >
          Contact Us
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <Phone className="w-6 h-6 text-amber-500 mr-4" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <Mail className="w-6 h-6 text-amber-500 mr-4" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">hello@sweetdelights.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <MapPin className="w-6 h-6 text-amber-500 mr-4" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-600">123 Baker Street, Sweet Town</p>
                </div>
              </motion.div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <iframe
                title="bakery location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991441291371!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM3nCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjgiVw!5e0!3m2!1sen!2sus!4v1635959573000!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <form className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                  placeholder="Your email"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                  placeholder="Your phone number"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 h-32"
                  placeholder="Your message"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-amber-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-amber-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}