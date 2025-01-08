import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { Timer, Gift, Tag } from 'lucide-react';

const offers = [
  {
    title: "Weekend Special",
    description: "Buy any 2 cakes and get 1 free!",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80",
    endDate: "2024-03-31",
    discount: "33%"
  },
  {
    title: "Early Bird Coffee",
    description: "50% off on all beverages before 9AM",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80",
    endDate: "2024-03-25",
    discount: "50%"
  },
  {
    title: "Birthday Special",
    description: "Free cupcake with any cake purchase",
    image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&q=80",
    endDate: "2024-03-28",
    discount: "Free"
  }
];

function CountdownTimer({ endDate }) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const end = new Date(endDate).getTime();
      const distance = end - now;

      if (distance < 0) {
        setTimeLeft('Expired');
        clearInterval(timer);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        setTimeLeft(`${days}d ${hours}h ${minutes}m`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className="flex items-center gap-2 text-amber-600">
      <Timer size={16} />
      <span>{timeLeft}</span>
    </div>
  );
}

export default function SpecialOffers() {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [currentOffer, setCurrentOffer] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center mb-12"
        >
          Special Offers
        </motion.h2>

        <div className="relative h-[500px] overflow-hidden rounded-xl">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, x: '100%' }}
              animate={{ 
                opacity: currentOffer === index ? 1 : 0,
                x: currentOffer === index ? 0 : '-100%'
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="relative h-full">
                <img 
                  src={offer.image} 
                  alt={offer.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8 max-w-2xl">
                    <Gift className="w-16 h-16 mx-auto mb-6 text-amber-400" />
                    <h3 className="text-3xl font-bold mb-4">{offer.title}</h3>
                    <p className="text-xl mb-6">{offer.description}</p>
                    <div className="flex justify-center items-center gap-4 mb-8">
                      <Tag className="text-amber-400" />
                      <span className="text-2xl font-bold text-amber-400">{offer.discount} OFF</span>
                    </div>
                    <CountdownTimer endDate={offer.endDate} />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-8 bg-amber-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-amber-300"
                    >
                      Get Discount
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {offers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentOffer(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentOffer === index ? 'bg-amber-400' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}