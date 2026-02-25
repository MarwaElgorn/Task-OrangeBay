import { FaStar } from "react-icons/fa";

export default function ReviewCard({ review }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-md h-full">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-300"></div>
        <div>
          <p className="font-semibold">{review.name}</p>
          <div className="flex text-primary">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                className={i < review.rating ? "" : "opacity-30"}
              />
            ))}
          </div>
        </div>
      </div>

      <h4 className="mt-6 font-semibold">{review.title}</h4>

      <p className="mt-3 text-gray-600 text-sm leading-relaxed">
        {review.text}
      </p>
    </div>
  );
}
