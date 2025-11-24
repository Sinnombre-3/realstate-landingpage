import { motion } from 'framer-motion';
import PropertyCard from './PropertyCardReact.jsx';

export default function PropertyGrid({ properties }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.30,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {properties.map((prop) => (
        <motion.div key={prop.slug.current} variants={item}>
          <PropertyCard
            title={prop.title}
            location={prop.location}
            price={prop.price}
            imageUrl={prop.imageUrl}
            soulLabel={prop.soulLabel}
            slug={prop.slug.current}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
