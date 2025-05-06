import React from "react";
import { Link, useLoaderData, useParams } from "react-router";

const BillDetails = () => {
  const { cardId } = useParams();
  const allBill = useLoaderData();
  console.log(allBill);
  const product = allBill.find((item) => item.id == cardId);
  console.log(cardId);
  return (
    <div>
      <h1>hi</h1>
      {/* <div className="max-w-3xl mx-auto p-4">
        <div className="card card-side bg-base-100 shadow-lg hover:border-orange-400 hover:border transition-transform transform duration-200 hover:scale-105">
          <figure className="p-4">
            <img
              src={bill.icon}
              alt={bill.organization}
              className="w-50 h-24 object-contain"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{bill.organization}</h2>
            <p className="text-sm text-gray-500">{bill.bill_type}</p>
            <div className="flex flex-wrap items-center gap-3 mt-1">
              <span className="text-lg font-bold text-orange-400">
                ${bill.amount}
              </span>
              {bill.pro && (
                <div className="px-4 py-1 bg-green-500/25 rounded-4xl text-xs">
                  PRO
                </div>
              )}
              <span className="text-sm text-gray-600">
                Due: {new Date(bill["due-date"]).toLocaleDateString()}
              </span>
            </div>
            <div className="card-actions justify-end mt-2">
              <Link
                to={`/details/${bill.id}`}
                className="btn text-white hover:bg-white hover:border hover:border-orange-400 hover:text-black w-full bg-orange-400 rounded-2xl btn-sm"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default BillDetails;
