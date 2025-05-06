import React from "react";
import trans from "../assets/lock.png";
import book from "../assets/book.png";
import search from "../assets/search.png";

const TransactionsCard = () => {
  const allCard = [
    {
      id: 1,
      title: "Secure Transactions",
      des: "Your payments are encrypted and protected with top-level security—peace of mind in every click.",
      image: trans,
    },
    {
      id: 2,
      title: "Fast Payment Process",
      des: "Pay your bills in seconds with a streamlined, user-friendly interface designed for speed.",
      image: book,
    },
    {
      id: 3,
      title: "Transaction History & Tracking",
      des: "Easily view, filter, and track all past payments—stay in control of your finances anytime.",
      image: search,
    },
  ];

  return (
    <section className="bg-base-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-primary mb-12">
          Our Features
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {allCard.map((item) => (
            <div
              key={item.id}
              className="bg-base-200 p-6 rounded-2xl border border-base-300 shadow-sm hover:shadow-lg transition-transform duration-300 transform hover:scale-105 text-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 mx-auto mb-4 object-contain"
              />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600">{item.des}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransactionsCard;
