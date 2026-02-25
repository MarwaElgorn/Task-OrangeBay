export default function CategoryCard({ item }) {
  return (
    <article
      aria-labelledby={`category-${item.id}-title`}
      className="relative h-full rounded-2xl overflow-hidden"
    >
      <img
        src={item.image}
        alt={`${item.title} sea trip category`}
        loading="lazy"
        className="w-full h-full object-cover"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
      />

      <h3
        id={`category-${item.id}-title`}
        className="absolute bottom-4 left-4 text-white text-base sm:text-lg font-medium"
      >
        {item.title}
      </h3>
    </article>
  );
}