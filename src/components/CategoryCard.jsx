export default function CategoryCard({ item }) {
  return (
    <div className="relative h-full rounded-2xl overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      <span className="absolute bottom-4 left-4 text-white text-base sm:text-lg font-medium">
        {item.title}
      </span>
    </div>
  );
}
