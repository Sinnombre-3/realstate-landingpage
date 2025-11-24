import { motion } from 'framer-motion';

export default function HeroContent({ heroTitle, heroSubtitle, ctaText, ctaLink }) {
  return (
    <div className="relative h-full container mx-auto px-6 flex flex-col justify-center items-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-5xl md:text-7xl font-serif text-white font-bold mb-6 tracking-tight drop-shadow-lg"
      >
        {heroTitle}
      </motion.h1>
      
      {heroSubtitle && (
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-lg md:text-2xl text-white/90 font-sans max-w-2xl mb-10 font-light leading-relaxed drop-shadow-md"
        >
          {heroSubtitle}
        </motion.p>
      )}

      <motion.a
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        href={ctaLink}
        className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white transition-all duration-200 bg-brand-primary font-sans tracking-widest uppercase hover:bg-ui-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary"
      >
        <span>{ctaText}</span>
        <div className="absolute inset-0 h-full w-full scale-0 rounded-sm transition-all duration-300 group-hover:scale-100 group-hover:bg-white/10"></div>
      </motion.a>
    </div>
  );
}
