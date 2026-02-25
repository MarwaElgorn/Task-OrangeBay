import { FaStar } from "react-icons/fa";
export default function ReviewCard({ name, rating, title, text, active }) {
  return (
    <div
      className={`
        bg-white
        shadow-[0_8px_24px_rgba(0,0,0,0.06)]
        transition-all duration-300
        flex flex-col items-center text-center
       px-4 py-[80px] m-6 rounded-lg
      `}
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-full bg-gray-300" />

        <div className="text-left">
          <h4 className="font-medium">{name}</h4>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={i < rating ? "text-[#FFA033] " : "text-gray-300"}
              >
          <FaStar />
              </span>
            ))}
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-6">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed max-w-[520px]">
        {text}
      </p>
    </div>
  );
}