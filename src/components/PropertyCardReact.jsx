export default function PropertyCard({ title, location, price, imageUrl, soulLabel, slug }) {
  const formattedPrice = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <a href={`/propiedades/${slug}`} className="group block relative overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-brand-black/10 group-hover:bg-brand-black/0 transition-colors duration-500"></div>
        
        {/* Soul Label (Floating) */}
        {soulLabel && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-serif italic tracking-wide text-brand-dark">
            {soulLabel}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <h3 className="text-xl font-serif font-bold text-brand-dark mb-1 group-hover:text-brand-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-brand-secondary text-sm mb-4 font-sans uppercase tracking-wider">
          {location}
        </p>
        <div className="flex justify-between items-end border-t border-gray-100 pt-4">
          <span className="text-lg font-semibold text-brand-dark">{formattedPrice}</span>
          <span className="text-xs text-brand-primary font-bold uppercase tracking-widest opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            Ver Detalle &rarr;
          </span>
        </div>
      </div>
    </a>
  );
}
