import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Tanvir Ahmed",
    photo: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    text: "Amazing service! Quick response and easy to use online banking features.",
  },
  {
    id: 2,
    name: "Sadia Khatun",
    photo: "https://i.pravatar.cc/150?img=47",
    rating: 4,
    text: "BillZone made managing my finances much easier. Highly recommended.",
  },
  {
    id: 3,
    name: "Rafiq Hassan",
    photo: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    text: "Excellent customer support and user-friendly app. Love the experience!",
  },
];

const ReviewSection = () => {
  return (
    <section className="bg-base-100 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">
          What Our Customers Say
        </h2>
        <p className="mb-10 text-gray-600">
          Real reviews from our valued clients
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-base-200 p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.photo}
                  alt={review.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <div className="flex text-yellow-400">
                    {Array(review.rating)
                      .fill()
                      .map((_, i) => (
                        <FaStar key={i} />
                      ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-700">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
